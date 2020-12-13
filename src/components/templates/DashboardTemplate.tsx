import { IonContent, IonHeader, IonList, IonPage, IonSlides, IonToolbar } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import SearchToolbar from 'components/molecules/SearchToolbar';
import BookInformation from 'components/molecules/BookInformation';

const BookContainer = styled(IonSlides)`
    padding: 20px 0;
`;


const DashboardTemplate: React.FC = () => {

    return (
        <IonPage>
            <SearchToolbar />   
            <IonContent fullscreen>
                <BookContainer options={{ slidesPerView: 'auto', zoom: false, grabCursor: true }}>
                    <BookInformation />
                    <BookInformation />
                    <BookInformation />
                    <BookInformation />
                    <BookInformation />
                </BookContainer>
                
            </IonContent>
        </IonPage>
    );
};

export default DashboardTemplate;