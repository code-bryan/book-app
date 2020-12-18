import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import Text from 'components/atoms/Text';
import React from 'react';
import RegisterForm from 'components/organisms/authentication/RegisterForm';
import RegisterSvg from 'components/atoms/RegisterSvg';
import BackButton from 'components/molecules/BackButton';
import { connect } from 'react-redux';
import { IApplicationStore } from 'domain/application/Store';
import { Dispatch } from 'redux';
import RegisterRequest from 'domain/authentication/senders/RegisterRequest';
import { registration } from 'domain/authentication/AuthenticationState';
import User from 'domain/authentication/entities/User';
import { IonAlert, IonLoading } from '@ionic/react';
import { RouteComponentProps, StaticContext } from 'react-router';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
  user: User | undefined;
  loadingUser: boolean;
  failAuthenticating: boolean;
  setRegistration: (values: RegisterRequest) => void;
}

const Register: React.FC<IProps> = ({ history, user, loadingUser, failAuthenticating, setRegistration }) => {
  const [fail, setFail] = React.useState<boolean>(false);

  const onDidDismissHandler = () => {
    setFail(false);
  }

  const onSubmitHandler = (values: RegisterRequest) => {
    setRegistration(values);
  }

  React.useEffect(() => {
    if (failAuthenticating) {
      setFail(failAuthenticating);
    }
  }, [failAuthenticating])

  React.useEffect(() => {
    if (user) {
      history.push('/home');
    }
  }, [user])

  return (
    <>
      <IonLoading isOpen={loadingUser} message="Porfavor espere..." translucent  backdropDismiss={false} />
      <IonAlert 
        isOpen={fail} 
        onDidDismiss={onDidDismissHandler} 
        header="Error autenticando"
        message="Usuario o contraseña incorrectos, intente nuevamente" 
        buttons={[
          {
            text: 'Okay',
            handler: onDidDismissHandler
          }
        ]}
      /> 
      <AuthenticationTemplate 
        backButton={<BackButton />}
        title={<Text color={'secondary'} size={23} weight={600}>Register</Text>}
        titleTop={10}
        svg={<RegisterSvg />}
        form={<RegisterForm onSubmit={onSubmitHandler} />}
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
  setRegistration: (values: RegisterRequest) => dispatch(registration(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
