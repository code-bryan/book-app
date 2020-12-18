import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import Text from 'components/atoms/Text';
import React from 'react';
import RecoverPasswordForm from 'components/organisms/authentication/RecoverPasswordForm';
import RecoverPasswordSvg from 'components/atoms/RecoverPasswordSvg';
import BackButton from 'components/molecules/BackButton';
import { RouteComponentProps, StaticContext } from 'react-router';
import RecoverPasswordRequest from 'domain/authentication/senders/RecoverPasswordRequest';
import AuthenticationService from 'domain/authentication/services/AuthenticationService';
import { IonAlert } from '@ionic/react';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
  
}

const RecoverPassword: React.FC<IProps> = ({ history }) => {
  const [show, setShow] = React.useState<boolean>(false);

  const onRecoverPasswordSubmitHandler = async (values: RecoverPasswordRequest) => { 
    console.log(values);
    await new AuthenticationService().forgotPassword(values.email);
    setShow(true);
  }

  const onDidDismissHandler = () => {
    history.goBack();
  }

  return (
    <>
      <IonAlert 
        isOpen={show} 
        onDidDismiss={onDidDismissHandler} 
        header="Correo de recuperación de contraseña"
        message="El correo de recuperación de contraseña A sido enviado a su inbox, porfavor abrirlo Y seguir los pasos" 
        buttons={[
          {
            text: 'Aceptar',
            handler: onDidDismissHandler
          }
        ]}
      />
      <AuthenticationTemplate 
        backButton={<BackButton />}
        title={<Text color={'secondary'} size={22} weight={600}>Recuperar contraseña</Text>}
        titleTop={40}
        svg={<RecoverPasswordSvg />}
        form={<RecoverPasswordForm onSubmit={onRecoverPasswordSubmitHandler} />}
      />
    </>
  );
};

export default RecoverPassword;
