import FilterButton from 'components/molecules/FilterButton';
import CollectionsList from 'components/organisms/books/CollectionList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import CollectionsTemplate from 'components/templates/CollectionsTemplate';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {

}

const Discover: React.FC<IProps> = ({ history }) => {
    return (
        <CollectionsTemplate
            toolbar={<GenericToolbarContent title={"Descubre"} button={<FilterButton />} />}
            list={<CollectionsList />}
        />
    );
}

export default Discover