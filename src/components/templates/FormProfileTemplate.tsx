import { IonContent, IonPage } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    margin: 25px 15px;
`;

interface IProps {
    toolbar: React.ReactNode;
    form: React.ReactNode;
}

const FormProfileTemplate: React.FC<IProps> = ({ toolbar, form }) => {
    return (
        <IonPage>
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent>
                <Section>
                    {form}
                </Section>
            </IonContent>
        </IonPage>
    );
};

export default FormProfileTemplate;