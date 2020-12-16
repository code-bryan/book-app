import { IonButtons, IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

const Toolbar = styled(IonToolbar)`
    --background: transparent;
    --border-color: transparent;
    --border-style: none;
    --box-shadow: none;
    --padding-top: ${isPlatform('ios') ? 15 : 25}px;
    padding: 0 15px 0 15px;
`;

interface IProps {
    right: React.ReactNode;
    left: React.ReactNode;
}

const PlayerToolbar: React.FC<IProps> = ({ right, left }) => (
    <IonHeader mode="ios">
        <Toolbar>
            <IonButtons slot="start">
                {right}
            </IonButtons>

            <IonButtons slot="end">
                {left}
            </IonButtons>
        </Toolbar>
    </IonHeader>
)

export default PlayerToolbar;