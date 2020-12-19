import LoginSvg from 'components/atoms/LoginSvg';
import LoginFooter from 'components/organisms/authentication/LoginFooter';
import LoginForm from 'components/organisms/authentication/LoginForm';
import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import Text from 'components/atoms/Text';
import React from 'react';
import { IApplicationStore } from 'domain/application/Store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import LoginRequest from 'domain/authentication/senders/LoginRequest';
import { login, setCurrentUser } from 'domain/authentication/AuthenticationState';
import { IonAlert, IonLoading } from '@ionic/react';
import User from 'domain/authentication/entities/User';
import AuthenticationService from 'domain/authentication/services/AuthenticationService';
import { fetchLibrary } from 'domain/books/states/LibraryState';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
  user: User | undefined;
  loadingUser: boolean;
  failAuthenticating: boolean;
  setLogin: (credentials: LoginRequest) => void;
  setUser: (user: User) => void;
  fetchLibrary: (id: string) => void;
}

const Login: React.FC<IProps> = ({ history, setLogin, user, loadingUser, failAuthenticating, setUser, fetchLibrary }) => {
  const [fail, setFail] = React.useState<boolean>(false);
  const [verifierRunning, setVerifierRunning] = React.useState<boolean>(false);

  const onDidDismissHandler = () => {
    setFail(false);
  }

  const onPasswordRecoverPressHandler = () => {
    history.push('/recover-password')
  };

  const onRegisterPressHandler = () => {
    history.push('/register');
  }

  const onLoignHandler = (credentials: LoginRequest) => {
    setLogin(credentials);
  }

  React.useEffect(() => {
    if (failAuthenticating) {
      setFail(failAuthenticating);
    }
  }, [failAuthenticating])

  React.useEffect(() => {
    if (user) {
      fetchLibrary(user.id);
      history.push('/home');
    }
  }, [user])

  React.useEffect(() => {
    const verifier = async () => {
      setVerifierRunning(true);
      const user = await new AuthenticationService().verifyLogin();
      if (!user) return;

      fetchLibrary(user.id);
      setUser(user);
      setVerifierRunning(false);
      history.push('/home');
    };

    verifier();
    setVerifierRunning(false);
  }, []);

  return (
    <>
      <IonLoading isOpen={verifierRunning} message="Porfavor espere..." translucent  backdropDismiss={false} />
      <IonLoading isOpen={loadingUser} message="Porfavor espere..." translucent  backdropDismiss={false} />
      <IonAlert 
        isOpen={fail} 
        onDidDismiss={onDidDismissHandler} 
        header="Error autenticando"
        message="Usuario o contraseña incorrectos, intente nuevamente" 
        buttons={[
          {
            text: 'Aceptar',
            handler: onDidDismissHandler
          }
        ]}
      />
    <AuthenticationTemplate
      title={<Text color={'secondary'} size={23} weight={600}>Login</Text>}
      svg={<LoginSvg />}
      form={<LoginForm onLogin={onLoignHandler} />}
      footer={
        <LoginFooter 
          onPasswordRecoverPress={onPasswordRecoverPressHandler} 
          onRegisterPress={onRegisterPressHandler} 
        />
      }
    />
    </>
  );
};

const mapStateToProps = (state: IApplicationStore) => ({
  user: state.authenticationState.user,
  loadingUser: state.authenticationState.loadingUser,
  failAuthenticating: state.authenticationState.failAuthenticating,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLogin: (credentials: LoginRequest) => dispatch(login(credentials)),
  setUser: (user: User) => dispatch(setCurrentUser(user)),
  fetchLibrary: (id: string) => dispatch(fetchLibrary(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
