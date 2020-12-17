import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import CollectionInformation from 'components/organisms/CollectionInformation';
import Collection from 'domain/books/entities/Collection';
import React from 'react';

interface IProps {
    collections: Collection[];
    onCollectionPress: (id: string) => void;
}

const HorizontalCollectionList: React.FC<IProps> = ({ collections, onCollectionPress }) => {
    return (
        <HorizontalScrollList paddingSize={15}>
            {collections.map((data) => (
                <HorizontalScrollItem key={data.id}>
                    <CollectionInformation data={data} onCollectionPress={(id) => onCollectionPress?.(id)} />
                </HorizontalScrollItem>
            ))}
        </HorizontalScrollList>
    );
};

export default HorizontalCollectionList;