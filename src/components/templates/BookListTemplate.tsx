import { IonApp, IonContent, IonPage } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import React from 'react'

interface IProps {
    toolbar: React.ReactNode;
    bookList: React.ReactNode;
}

const BookListTemplate: React.FC<IProps> = ({ toolbar, bookList }) => {
    return (
        <IonPage>
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent fullscreen>
                {bookList}
            </IonContent>
        </IonPage>
    );
};

export default BookListTemplate;
