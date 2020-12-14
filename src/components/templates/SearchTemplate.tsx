import { IonContent, IonPage } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import NoSearchMade from 'components/molecules/NoSearchMade';
import React from 'react';
import styled from 'styled-components';

const NoSearchContainer = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IProps {
    toolbar: React.ReactNode;
}

const SearchTemplate: React.FC<IProps> = ({ toolbar }) => {
    return (
        <IonPage> 
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent fullscreen>
                <NoSearchContainer>
                    <NoSearchMade />
                </NoSearchContainer>
            </IonContent>
        </IonPage>
    );
}

export default SearchTemplate;