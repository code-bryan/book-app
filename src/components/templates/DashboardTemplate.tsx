import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import SearchToolbar from 'components/molecules/SearchToolbar';
import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import Book from 'domain/books/entities/Book';
import Category from 'domain/books/entities/Category';
import Collection from 'domain/books/entities/Collection';

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
    newBooks: Book[];
    newBooksTitle: React.ReactNode;
    newBookItem: React.ComponentType<any>;

    categories: Category[];
    categoriesTitle: React.ReactNode;
    categoryItem: React.ComponentType<any>;

    collections: Collection[]
    discoverTitle: React.ReactNode;
    discoveryItem: React.ComponentType<any>;
}

const DashboardTemplate: React.FC<IProps> = ({ newBooks, newBooksTitle, newBookItem, categoriesTitle, categories, categoryItem, collections, discoverTitle, discoveryItem }) => {

    return (
        <IonPage>
            <SearchToolbar />   
            <Container fullscreen scrollY>

                <Section>
                    <SectionInformationContainer>
                        {newBooksTitle}
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        {newBooks.map((data) => (
                            <HorizontalScrollItem key={data.id}>
                                {React.createElement<any>(newBookItem, { data })}
                            </HorizontalScrollItem>
                        ))}
                    </HorizontalScrollList>
                </Section>

                <Section>
                    <SectionInformationContainer>
                        {categoriesTitle}
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        {categories.map((data) => (
                            <HorizontalScrollItem key={data.id}>
                                {React.createElement<any>(categoryItem, { data })}
                            </HorizontalScrollItem>
                        ))}
                    </HorizontalScrollList>
                </Section>

                <LastSection>
                    <SectionInformationContainer>
                        {discoverTitle}
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        {collections.map((data) => (
                            <HorizontalScrollItem key={data.id}>
                                 {React.createElement<any>(discoveryItem, { data })}
                            </HorizontalScrollItem>
                        ))}
                    </HorizontalScrollList>
                </LastSection>

            </Container>
        </IonPage>
    );
};

export default DashboardTemplate;