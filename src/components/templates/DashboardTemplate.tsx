import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import SearchToolbar from 'components/molecules/SearchToolbar';

const Container = styled(IonContent)`
    padding-left: 20px;
`;

const Section = styled.div`
    margin: 20px 0 0;
`;

const LastSection = styled.div`
    margin: 20px 0 40px;
`;

const SectionInformationContainer = styled.div`
    margin-left: 15px;
    margin-bottom: 10px;
`;

interface IProps {
    booksTitle: React.ReactNode;
    bookList: React.ReactNode;

    categoriesTitle: React.ReactNode;
    categoryList: React.ReactNode;

    discoverTitle: React.ReactNode;
    collectionList: React.ReactNode;
}

const DashboardTemplate: React.FC<IProps> = ({ booksTitle, bookList, categoriesTitle, categoryList,  discoverTitle, collectionList }) => {

    return (
        <IonPage>
            <SearchToolbar />   
            <Container fullscreen scrollY>

                <Section>
                    <SectionInformationContainer>
                        {booksTitle}
                    </SectionInformationContainer>
                    {bookList}
                </Section>

                <Section>
                    <SectionInformationContainer>
                        {categoriesTitle}
                    </SectionInformationContainer>
                    {categoryList}
                </Section>

                <LastSection>
                    <SectionInformationContainer>
                        {discoverTitle}
                    </SectionInformationContainer>
                    {collectionList}
                </LastSection>

            </Container>
        </IonPage>
    );
};

export default DashboardTemplate;