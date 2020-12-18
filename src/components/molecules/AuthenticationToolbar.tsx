import { IonButtons, IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

const Toolbar = styled(IonToolbar)`
    --background: transparent;
    --border-color: transparent;
    --border-style: none;
    --box-shadow: none;
    --padding-top: ${isPlatform('ios') ? 15 : 25}px;
    padding: 0 10px;
`;

const AuthenticationToolbar: React.FC = ({ children }) => (
    <IonHeader mode="ios">
        <Toolbar>
            {children && (
                <IonButtons slot="start">
                    {children}
                </IonButtons>
            )}
        </Toolbar>
    </IonHeader>
)

export default AuthenticationToolbar;