import LoginSvg from 'components/atoms/LoginSvg';
import LoginFooter from 'components/organisms/authentication/LoginFooter';
import LoginForm from 'components/organisms/authentication/LoginForm';
import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import Text from 'components/atoms/Text';
import React from 'react';

const Login: React.FC = () => {
  return (
    <AuthenticationTemplate 
      title={<Text color={'secondary'} size={23} weight={600}>Login</Text>}
      svg={<LoginSvg />}
      form={<LoginForm />}
      footer={<LoginFooter />}
    />
  );
};

export default Login;
