import React from 'react';
import styled from 'styled-components';
import { IonBackButton, IonRouterLink } from '@ionic/react';
import Colors from 'theme/Colors';


const BackButtonIonic = styled(IonBackButton)`
    --color: ${Colors.SECONDARY};
`;

const BackButton: React.FC = () => {
    return (
        <BackButtonIonic />
    );
};

export default BackButton;