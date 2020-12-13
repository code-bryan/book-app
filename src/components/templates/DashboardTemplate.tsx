import { IonContent, IonHeader, IonList, IonPage, IonSlides, IonToolbar } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import SearchToolbar from 'components/molecules/SearchToolbar';
import BookInformation from 'components/molecules/BookInformation';
import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import SectionInformation from 'components/organisms/SectionInformation';

const Container = styled(IonContent)`
    padding-left: 20px;
`;

const Section = styled.div`
    margin: 20px 0 0 0;
`;

const SectionInformationContainer = styled.div`
    margin-left: 15px;
    margin-bottom: 10px;
`;

const DashboardTemplate: React.FC = () => {

    return (
        <IonPage>
            <SearchToolbar />   
            <Container fullscreen>

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

            </Container>
        </IonPage>
    );
};

export default DashboardTemplate;