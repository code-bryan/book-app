import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import SearchToolbar from 'components/molecules/SearchToolbar';
import BookInformation from 'components/molecules/BookInformation';
import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import CollectionInformation from 'components/molecules/CollectionInformation';
import CategoryCard from 'components/molecules/CategoryCard';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';

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
    newBooksTitle: React.ReactNode;
    NewBookItem: React.ComponentType;
    categoriesTitle: React.ReactNode;
    CategoryItem: React.ComponentType;
    discoverTitle: React.ReactNode;
    DiscoveryItem: React.ComponentType;
}

const DashboardTemplate: React.FC<IProps> = ({ newBooksTitle, NewBookItem, categoriesTitle, CategoryItem, discoverTitle, DiscoveryItem }) => {

    return (
        <IonPage>
            <SearchToolbar />   
            <Container fullscreen scrollY>

                <Section>
                    <SectionInformationContainer>
                        {newBooksTitle}
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        <HorizontalScrollItem>
                           <NewBookItem />
                        </HorizontalScrollItem>
                    </HorizontalScrollList>
                </Section>

                <Section>
                    <SectionInformationContainer>
                        {categoriesTitle}
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        <HorizontalScrollItem>
                            <CategoryItem>Horror</CategoryItem>
                        </HorizontalScrollItem>
                    </HorizontalScrollList>
                </Section>

                <LastSection>
                    <SectionInformationContainer>
                        {discoverTitle}
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        <HorizontalScrollItem>
                            <DiscoveryItem />
                        </HorizontalScrollItem>
                    </HorizontalScrollList>
                </LastSection>

            </Container>
        </IonPage>
    );
};

export default DashboardTemplate;