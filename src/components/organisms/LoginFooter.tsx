import LinkButton from 'components/molecules/LinkButton';
import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LoginFooter = () => {

    return (
        <Footer>
            <LinkButton color={'secondary'}  size={16}  weight={500}>Login</LinkButton>
            <LinkButton color={'secondary'}  size={16}  weight={500}>Login</LinkButton>
        </Footer>
    );
}

export default LoginFooter;