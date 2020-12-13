import FilterButton from 'components/molecules/FilterButton';
import CollectionList from 'components/organisms/books/CollectionList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import CollectionTemplate from 'components/templates/CollectionTemplate';
import React from 'react';

const Discover: React.FC = () => {
    return (
        <CollectionTemplate
            toolbar={<GenericToolbarContent title={"Descubre"} button={<FilterButton />} />}
            list={<CollectionList />}
        />
    );
}

export default Discover