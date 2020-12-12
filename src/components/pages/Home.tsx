import LoginSvg from 'components/atoms/LoginSvg';
import LoginForm from 'components/organisms/LoginForm';
import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import React from 'react';

const Home: React.FC = () => {
  return (
    <AuthenticationTemplate 
      svg={<LoginSvg />}
      form={<LoginForm />}
    />
  );
};

export default Home;
