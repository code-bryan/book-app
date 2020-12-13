import { IonCol, IonGrid, IonRow } from '@ionic/react';
import BookInformation from 'components/molecules/BookInformation';
import CollectionInformation from 'components/molecules/CollectionInformation';
import BooksTestData from 'domain/books/test/BooksTestData';
import CollectionTestData from 'domain/books/test/CollectionTestData';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* margin: 0 5px; */
`;

const CollectionList = () => {
    return (
        <Container>
            <IonGrid>
                <IonRow>
                    {CollectionTestData.map((collection) => (
                        <IonCol size="6" key={collection.id}>
                            <CollectionInformation data={collection} width={150} height={160} />
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </Container>
    );
};

export default CollectionList;