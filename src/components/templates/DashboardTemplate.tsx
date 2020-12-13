import { IonContent, IonHeader, IonList, IonPage, IonSlides, IonToolbar } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import SearchToolbar from 'components/molecules/SearchToolbar';
import BookInformation from 'components/molecules/BookInformation';
import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import SectionInformation from 'components/organisms/SectionInformation';
import CollectionInformation from 'components/molecules/CollectionInformation';
import CategoryCard from 'components/molecules/CategoryCard';

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

const CollectionInformationContainer = styled.div`
    margin-right: 10px;
`;

const DashboardTemplate: React.FC = () => {

    return (
        <IonPage>
            <SearchToolbar />   
            <Container fullscreen scrollY>

                <Section>
                    <SectionInformationContainer>
                        <SectionInformation>Libros nuevos</SectionInformation>
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        <BookInformation marginRight={10} />
                        <BookInformation marginRight={10} />
                        <BookInformation marginRight={10} />
                        <BookInformation marginRight={10} />
                        <BookInformation marginRight={10} />
                        <BookInformation marginRight={10} />
                    </HorizontalScrollList>
                </Section>

                <Section>
                    <SectionInformationContainer>
                        <SectionInformation>Categorias</SectionInformation>
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        <CategoryCard marginRight={10}>Horror</CategoryCard>
                        <CategoryCard marginRight={10}>Horror</CategoryCard>
                        <CategoryCard marginRight={10}>Horror</CategoryCard>
                        <CategoryCard marginRight={10}>Horror</CategoryCard>
                        <CategoryCard marginRight={10}>Horror</CategoryCard>
                        <CategoryCard marginRight={10}>Horror</CategoryCard>
                        
                    </HorizontalScrollList>
                </Section>

                <LastSection>
                    <SectionInformationContainer>
                        <SectionInformation>Descubre</SectionInformation>
                    </SectionInformationContainer>
                    
                    <HorizontalScrollList paddingSize={15}>
                        <CollectionInformation marginRight={10} />
                        <CollectionInformation marginRight={10} />
                        <CollectionInformation marginRight={10} />
                        <CollectionInformation marginRight={10} />
                        <CollectionInformation marginRight={10} />
                    </HorizontalScrollList>
                </LastSection>

            </Container>
        </IonPage>
    );
};

export default DashboardTemplate;