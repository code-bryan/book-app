import { IonContent, IonPage } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import React from 'react';

interface IProps {
    toolbar: React.ReactNode;
    list: React.ReactNode;
}

const CollectionsTemplate: React.FC<IProps> = ({ toolbar, list }) => {
    return (
        <IonPage>
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent fullscreen>
                {list}
            </IonContent>
        </IonPage>
    );
};

export default CollectionsTemplate;