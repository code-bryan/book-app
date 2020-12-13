import { IonApp, IonContent } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import React from 'react'

interface IProps {
    toolbar: React.ReactNode;
}

const BookListTemplate: React.FC<IProps> = ({  }) => {
    return (
        <IonApp>
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent>

            </IonContent>
        </IonApp>
    );
};

export default BookListTemplate;
