import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import Text from 'components/atoms/Text';
import React from 'react';
import RegisterForm from 'components/organisms/authentication/RegisterForm';
import RegisterSvg from 'components/atoms/RegisterSvg';

const Register: React.FC = () => {
  return (
    <AuthenticationTemplate 
      title={<Text color={'secondary'} size={23} weight={600}>Register</Text>}
      titleTop={10}
      svg={<RegisterSvg />}
      form={<RegisterForm />}
    />
  );
};

export default Register;
