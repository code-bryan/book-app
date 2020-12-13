import { IonApp, IonContent } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import React from 'react'

interface IProps {
    toolbar: React.ReactNode;
    bookList: React.ReactNode;
}

const BookListTemplate: React.FC<IProps> = ({ toolbar, bookList }) => {
    return (
        <IonApp>
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent>
                {bookList}
            </IonContent>
        </IonApp>
    );
};

export default BookListTemplate;
