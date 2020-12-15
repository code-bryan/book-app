import { IonButtons, IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import BackButton from 'components/molecules/BackButton';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const Toolbar = styled(IonToolbar)`
    --background: ${Colors.WHITE};
    --border-color: transparent;
    --padding-top: ${isPlatform('ios') ? 15 : 20}px;
    margin: 0 10px;
`;

const BookToolbar: React.FC = () => (
    <IonHeader mode="ios">
        <Toolbar>
            <IonButtons slot="start">
                <BackButton />
            </IonButtons>
        </Toolbar>
    </IonHeader>
)

export default BookToolbar;