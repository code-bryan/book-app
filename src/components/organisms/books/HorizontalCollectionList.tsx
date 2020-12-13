import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import CollectionInformation from 'components/molecules/CollectionInformation';
import Collection from 'domain/books/entities/Collection';
import React from 'react';

interface IProps {
    collections: Collection[];
}

const HorizontalCollectionList: React.FC<IProps> = ({ collections }) => {
    return (
        <HorizontalScrollList paddingSize={15}>
            {collections.map((data) => (
                <HorizontalScrollItem key={data.id}>
                    <CollectionInformation data={data} />
                </HorizontalScrollItem>
            ))}
        </HorizontalScrollList>
    );
};

export default HorizontalCollectionList;