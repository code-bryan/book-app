import { IonFab, IonFabButton } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const Container = styled(IonFab)`
    bottom: 10%;
`;
const Button = styled(IonFabButton)`
    --background: ${Colors.WHITE};
`;

interface IProps {
    onPress?: () => void;
}

const PlayerFloatingButton: React.FC<IProps> = ({ children, onPress }) => {
    return (
        <Container vertical="bottom" horizontal="start" slot="fixed">
            <Button onClick={() => onPress?.()}>
                {children}
            </Button>
        </Container>
    )
}

export default PlayerFloatingButton;