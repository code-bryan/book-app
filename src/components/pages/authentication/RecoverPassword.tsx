import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import Text from 'components/atoms/Text';
import React from 'react';
import RecoverPasswordForm from 'components/organisms/authentication/RecoverPasswordForm';
import RecoverPasswordSvg from 'components/atoms/RecoverPasswordSvg';
import BackButton from 'components/molecules/BackButton';

const RecoverPassword: React.FC = () => {
  return (
    <AuthenticationTemplate 
      backButton={<BackButton />}
      title={<Text color={'secondary'} size={22} weight={600}>Recuperar contraseña</Text>}
      titleTop={40}
      svg={<RecoverPasswordSvg />}
      form={<RecoverPasswordForm />}
    />
  );
};

export default RecoverPassword;
