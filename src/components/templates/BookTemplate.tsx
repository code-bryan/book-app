import { IonContent, IonPage } from '@ionic/react';
import BookToolbar from 'components/organisms/BookToolbar';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    margin: 15px 15px 0;
`;

const FirstSection = styled.div`
    margin: 5px 15px 0;
`;
interface IProps {
    bookDetails: React.ReactNode;
    bookDescription: React.ReactNode;
    bookAction?: React.ReactNode;
}

const BookTemplate: React.FC<IProps> = ({ bookDetails, bookDescription, bookAction }) => {
    return (
        <IonPage>
            <BookToolbar />
            <IonContent fullscreen>
                <FirstSection>
                    {bookDetails}
                </FirstSection>
                
                <Section>
                    {bookDescription}
                </Section>

                {bookAction && (
                    <Section>
                        {bookAction}
                    </Section>
                )}
            </IonContent>
        </IonPage>
    );
};

export default BookTemplate;