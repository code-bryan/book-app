import { GenericProps } from 'domain/generic-ui/GenericProps';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Colors from 'theme/Colors';

interface IProps extends GenericProps {
    textColor?: 'primary' | 'secondary',
    height?: number;
    type?: 'submit' | 'reset' | 'button';
    onTap?: () => void;
}

const ButtonContainer = styled.button`
    background-color: ${(props: IProps) => props.color === 'primary' ? Colors.PRIMARY : Colors.SECONDARY};
    width: 100%;
    height: ${(props) => props.height}px;
    border-radius: 5px;
    outline: none;
`;

const Button: React.FC<IProps> = ({ children, textColor, onTap, ...props }) => {

    return (
        <ButtonContainer {...props} onClick={() => onTap?.()}>
            <Text {...props} color={textColor}>{children}</Text>
        </ButtonContainer>
    );
};

Button.defaultProps = {
    color: 'secondary',
    size: 18,
    weight: 500,
    textColor: 'primary',
    height: 50,
    type: 'button',
};

export default Button;