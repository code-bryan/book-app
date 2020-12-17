import { IonButtons, IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import BackButton from 'components/molecules/BackButton';
import React from 'react';
import styled from 'styled-components';

const Header = styled(IonHeader)`
    position: absolute;
    --border-width: 0;
`;

const Toolbar = styled(IonToolbar)`
    --background: transparent;
    --border-width: 0 !important;
    padding-top: ${isPlatform('ios') ? 10 : 20}px !important;
    padding-left: 10px;
    padding-right: 10px;
`;

interface IProps {
    outOfImage?: boolean;
}

const CollectionToolbar: React.FC<IProps> = ({ outOfImage }) => {
    return (
        <Header mode="ios" translucent={!outOfImage}>
            <Toolbar>
                <IonButtons slot="start">
                    <BackButton />
                </IonButtons>
            </Toolbar>
        </Header>
    );
};

CollectionToolbar.defaultProps = {
    outOfImage: true
}

export default CollectionToolbar;