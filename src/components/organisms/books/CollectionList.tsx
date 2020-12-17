import { IonCol, IonGrid, IonRow } from '@ionic/react';
import CollectionInformation from 'components/organisms/CollectionInformation';
import CollectionTestData from 'domain/books/test/CollectionTestData';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CollectionList = () => {
    return (
        <Container>
            <IonGrid style={{ width: '100%' }}>
                <IonRow>
                    {CollectionTestData.map((collection) => (
                        <IonCol size="6" key={collection.id}>
                            <CollectionInformation data={collection} width={140} height={150} />
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </Container>
    );
};

export default CollectionList;