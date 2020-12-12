import { GenericProps } from 'domain/generic-ui/GenericProps';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Colors from 'theme/Colors';

interface IProps extends GenericProps {
    textColor?: 'primary' | 'secondary',
    height?: number;
}

const ButtonContainer = styled.button`
    background-color: ${(props: IProps) => props.color === 'primary' ? Colors.PRIMARY : Colors.SECONDARY};
    width: 100%;
    height: ${(props) => props.height}px;
    border-radius: 5px;
`;

const Button: React.FC<IProps> = ({ children, textColor, ...props }) => {

    return (
        <ButtonContainer {...props}>
            <Text {...props} color={textColor}>{children}</Text>
        </ButtonContainer>
    );
};

Button.defaultProps = {
    color: 'secondary',
    size: 18,
    weight: 'normal',
    textColor: 'primary',
    height: 60,
};

export default Button;