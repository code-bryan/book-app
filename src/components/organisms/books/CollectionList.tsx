import { IonCol, IonGrid, IonRow } from '@ionic/react';
import CollectionInformation from 'components/organisms/CollectionInformation';
import Collection from 'domain/books/entities/Collection';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IProps {
    collections: Collection[];
    onPress?: (id: string) => void;
}

const CollectionList: React.FC<IProps> = ({ collections, onPress }) => {
    return (
        <Container>
            <IonGrid style={{ width: '100%' }}>
                <IonRow>
                    {collections.map((collection) => (
                        <IonCol size="6" key={collection.id}>
                            <CollectionInformation data={collection} width={140} height={150} onCollectionPress={(id) => onPress?.(id)} />
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </Container>
    );
};

export default CollectionList;