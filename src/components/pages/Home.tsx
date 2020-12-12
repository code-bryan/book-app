import LoginSvg from 'components/atoms/LoginSvg';
import AuthenticationTemplate from 'components/templates/AuthenticationTemplate';
import React from 'react';

const Home: React.FC = () => {
  return (
    <AuthenticationTemplate 
      svg={<LoginSvg />}
    />
  );
};

export default Home;
