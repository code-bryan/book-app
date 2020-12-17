import { IonContent, IonPage } from '@ionic/react';
import Text from 'components/atoms/Text';
import CollectionQuote from 'components/molecules/CollectionQuote';
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
    imageHeight: number;
}

const CollectionTemplate: React.FC<IProps> = ({ image, title, bookListTitle, bookList, imageHeight }) => {
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
                    <SectionText>
                        <Text color="secondary" size={15} weight={500} whiteSpace="break-spaces">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut erat id odio ornare pulvinar. 
                        </Text>
                    </SectionText>

                    <SectionText>
                        <Text color="secondary" size={15} weight={500} whiteSpace="break-spaces">
                            Sed scelerisque nibh mi, vitae pulvinar ante cursus eget. Nunc rutrum, dolor quis accumsan venenatis, arcu lectus dictum metus, non sagittis risus lectus eget felis. Vestibulum volutpat ac tellus a volutpat. 
                        </Text>
                    </SectionText>
                </Section>

                <Section>
                    <CollectionQuote big>{"Inspirarse"}</CollectionQuote>
                    <CollectionQuote big>{"Aprender"}</CollectionQuote>
                    <CollectionQuote big>{"Recuentos de la vida"}</CollectionQuote>
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