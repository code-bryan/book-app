import LinkButton from 'components/molecules/LinkButton';
import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Item = styled.div`
    flex: 1;
    display: flex;
    justify-content: ${(props: { end?: boolean }) => props.end ? 'flex-end' : 'flex-start'};
`;

interface IProps {
    onPasswordRecoverPress?: () => void;
    onRegisterPress?: () => void;
}

const LoginFooter: React.FC<IProps> = ({ onPasswordRecoverPress, onRegisterPress }) => {

    return (
        <Footer>
            <Item>
                <LinkButton color={'secondary'}  size={15}  weight={500} onTap={() => onPasswordRecoverPress?.()}>Recuperar cont…</LinkButton>
            </Item>
            
            <Item end>
                <LinkButton color={'secondary'}  size={15}  weight={500} onTap={() => onRegisterPress?.()}>Crear cuenta</LinkButton>
            </Item>
        </Footer>
    );
}

export default LoginFooter;