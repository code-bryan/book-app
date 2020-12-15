import { IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import BackButton from 'components/molecules/BackButton';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    margin: 15px 15px 0;
`;

interface IProps {
    bookDetails: React.ReactNode;
    bookDescription: React.ReactNode;
}

const BookTemplate: React.FC<IProps> = ({ bookDetails, bookDescription }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode="ios">
                    <IonButtons slot="start">
                        <BackButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Section>
                    {bookDetails}
                </Section>
                <Section>
                    {bookDescription}
                </Section>
            </IonContent>
        </IonPage>
    );
};

export default BookTemplate;