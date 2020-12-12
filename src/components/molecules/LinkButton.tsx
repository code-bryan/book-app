import { GenericProps } from 'domain/generic-ui/GenericProps';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';

interface IProps extends GenericProps {
    height?: number;
    type?: 'submit' | 'reset' | 'button';
    onTap?: () => void;
}

const ButtonContainer = styled.button`
    width: auto;
    background: transparent;
    height: ${(props: IProps) => props.height}px;
    outline: none;
    text-decoration: none;
`;

const LinkButton: React.FC<IProps> = ({ children, onTap, ...props }) => {

    return (
        <ButtonContainer {...props} onClick={() => onTap?.()}>
            <Text {...props}>{children}</Text>
        </ButtonContainer>
    );
};

LinkButton.defaultProps = {
    color: 'secondary',
    size: 18,
    weight: 500,
    height: 20,
    type: 'button',
};

export default LinkButton;