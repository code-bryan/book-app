import { IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const Toolbar = styled(IonToolbar)`
    --background: ${Colors.PRIMARY};
    --border-color: transparent;
    --padding-top: ${isPlatform('ios') ? 40 : 45}px;
    padding: 0 10px 5px;
`;

const GenericToolbar:React.FC = ({ children }) => (
    <IonHeader mode="ios">
        <Toolbar>
            {children}
        </Toolbar>
    </IonHeader>
);

export default GenericToolbar;