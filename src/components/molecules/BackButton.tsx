import React from 'react';
import styled from 'styled-components';
import { IonBackButton } from '@ionic/react';
import Colors from 'theme/Colors';


const BackButtonIonic = styled(IonBackButton)`
    --color: ${Colors.SECONDARY};
    font-size: 14px;
    font-weight: 500;
    /* margin-left: 10px; */
`;

const BackButton: React.FC = () => {
    return (
        <BackButtonIonic />
    );
};

export default BackButton;