import { GenericProps } from 'domain/generic-ui/GenericProps';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Colors from 'theme/Colors';
import { IonButton } from '@ionic/react';
import { IonicReactProps } from '@ionic/react/dist/types/components/IonicReactProps';

interface IProps extends GenericProps {
    textColor?: 'primary' | 'secondary',
    height?: number;
    type?: 'submit' | 'reset' | 'button';
    onTap?: () => void;
}

const onColorSelect = (color: string) => color === 'primary' ? Colors.PRIMARY : Colors.SECONDARY;

const ButtonContainer: React.FC<IProps & IonicReactProps> = styled(IonButton)`
    background-color: ${(props: IProps) => onColorSelect(props.color as string)};
    width: 100%;
    height: ${(props) => props.height}px;
    border-radius: 5px;
    outline: none;
    font-size: ${(props: IProps) => props.size}px;
    letter-spacing: normal;
    text-transform: none;
`;

const Button: React.FC<IProps> = ({ children, textColor, onTap, ...props }) => {

    return (
        // @ts-ignore
        <ButtonContainer {...props} color={onColorSelect(props.color)}  onClick={() => onTap?.()}>
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