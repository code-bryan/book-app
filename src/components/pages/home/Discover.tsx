import FilterButton from 'components/molecules/FilterButton';
import Loading from 'components/molecules/Loading';
import CollectionsList from 'components/organisms/books/CollectionList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import CollectionsTemplate from 'components/templates/CollectionsTemplate';
import { IApplicationStore } from 'domain/application/Store';
import Collection from 'domain/books/entities/Collection';
import { fetchCollections } from 'domain/books/states/CollectionState';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    collections: Collection[],
    loading: boolean,
    fail: boolean,
    fetchCollections: () => void
}

const Discover: React.FC<IProps> = ({ history, collections, loading, fail, fetchCollections }) => {
    const onCollectionPress = (id: string) => history.push(`/home/collection/${id}`);

    React.useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <CollectionsTemplate
            toolbar={<GenericToolbarContent title={"Descubre"} />}
            list={!loading ? <CollectionsList collections={collections} onPress={onCollectionPress} /> : <Loading />}
        />
    );
}

const mapStateToProps = (state: IApplicationStore) => ({
    collections: state.collectionsState.collections,
    loading: state.collectionsState.loadingCollections,
    fail: state.collectionsState.failFetchingCollections
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchCollections: () => dispatch(fetchCollections()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Discover);