import { IonContent, IonPage } from '@ionic/react';
import Text from 'components/atoms/Text';
import CollectionToolbar from 'components/organisms/CollectionToolbar';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    margin: 10px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const SectionText = styled.div`
    margin: 5px 0;
`;

interface IProps {
    image: React.ReactNode;
    title: React.ReactNode;
    bookListTitle: React.ReactNode;
    bookList: React.ReactNode;
    quotes: React.ReactNode;
    loading: React.ReactNode;
    description: React.ReactNode;
    imageHeight: number;
}

const CollectionTemplate: React.FC<IProps> = ({ image, title, bookListTitle, bookList, quotes, imageHeight, loading, description }) => {
    const [scroll, setScroll] = React.useState<number>(0);
    
    return (
        <IonPage>
            <CollectionToolbar  outOfImage={scroll <= imageHeight - 20}/>
            <IonContent scrollEvents onIonScroll={(e) => setScroll(e.detail.currentY)}>
                {image}

                <Section>
                    {title}
                </Section>

                <Section>
                    {description}
                </Section>

                {loading}

                <Section>
                    {quotes}
                </Section>
                
                <Section>
                    {bookListTitle}
                </Section>
                
                {bookList}
            </IonContent>
        </IonPage>
    );
};

export default CollectionTemplate;