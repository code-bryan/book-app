import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import SearchToolbar from 'components/molecules/SearchToolbar';

const Container = styled.div`

`;

const DashboardTemplate: React.FC = () => {

    return (
        <IonPage>
            <SearchToolbar />
            <IonContent>

            </IonContent>
        </IonPage>
    );
};

export default DashboardTemplate;