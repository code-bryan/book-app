import LoginSvg from 'components/atoms/LoginSvg';
import LoginFooter from 'components/organisms/LoginFooter';
import LoginForm from 'components/organisms/LoginForm';
import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import React from 'react';

const Home: React.FC = () => {
  return (
    <AuthenticationTemplate 
      svg={<LoginSvg />}
      form={<LoginForm />}
      footer={<LoginFooter />}
    />
  );
};

export default Home;
