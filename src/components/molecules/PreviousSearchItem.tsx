import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import { IonRippleEffect } from '@ionic/react';
import { X } from 'react-feather';
import Colors from 'theme/Colors';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    outline: none;
    background: ${Colors.WHITE  };
    color: ${Colors.SECONDARY};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 33px;
    height: 31px;
`;

interface IProps {
    onRemove?: () => void;
    onSelect?: () => void;
}

const PreviousSearchItem: React.FC<IProps> = ({ onRemove, onSelect }) => {
    return (
        <Container>
            <Text color="secondary" size={14} weight={500} width={'100%'} onTap={() => onSelect?.()}>Steven</Text>

            <Button className="ion-activatable ripple-parent" onClick={() => onRemove?.()}>
                <X size={18} />
                <IonRippleEffect type="unbounded" />
            </Button>
        </Container>
    );
};

export default PreviousSearchItem;