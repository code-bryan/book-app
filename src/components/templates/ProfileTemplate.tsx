import { IonContent, IonPage } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    margin: 25px 15px;
`;
interface ProfileTemplateMode {
    PROFILE: 'profile',
    FORM: 'form'
}

interface IProps {
    toolbar: React.ReactNode;
    options?: React.ReactNode;
}

const ProfileTemplate: React.FC<IProps> = ({ toolbar, options }) => {
    return (
        <IonPage>
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent>
                <Section>
                    {options}
                </Section>
            </IonContent>
        </IonPage>
    );
};

export default ProfileTemplate;