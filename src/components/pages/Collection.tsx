import BookList from 'components/organisms/books/BookList';
import CollectionTemplate from 'components/templates/CollectionTemplate';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import Text from 'components/atoms/Text';
import Image from 'components/atoms/Image';
import CollectionQuote from 'components/molecules/CollectionQuote';
import { connect } from 'react-redux';
import { IApplicationStore } from 'domain/application/Store';
import { Dispatch } from 'redux';
import { clearCollection, fetchCollection } from 'domain/books/states/CollectionState';
import {default as CollectionClass} from 'domain/books/entities/Collection';
import Loading from 'components/molecules/Loading';
interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    collection: CollectionClass | undefined;
    loading: boolean;
    fail: boolean;
    setCollection: (id: string) => void;
    clearCollection: () => void;
}

const Collection: React.FC<IProps> = ({ match, history, collection, loading, fail, setCollection, clearCollection }) => {
    const imageHeight = React.useRef(window.innerHeight / 3.5);

    const onBookPressHandler = (id: string) => {
        history.push(`/home/book/${id}`);
    }

    React.useEffect(() => {
        console.log(match.params.id);
        setCollection(match.params.id);

        return () => clearCollection();
    }, []);

    return(
        <CollectionTemplate
            loading={loading ? <Loading /> : <></>}
            title={collection ? <Text color="secondary" weight={"bold"}>Ideas - Libros motivaciones</Text> : <></>}
            image={collection ? <Image src={collection?.image} width={window.innerWidth} height={imageHeight.current} /> : <></>}
            bookListTitle={collection ? <Text color="secondary" weight={500}>Libros</Text> : <></>}
            description={collection ? <Text color="secondary" size={15} weight={500} whiteSpace="break-spaces">{collection.description}</Text> : <></>}
            quotes={
                <>
                    {collection && collection.quotes.map((quote) => <CollectionQuote big>{quote}</CollectionQuote>)}
                </>
            }
            bookList={collection ? <BookList books={collection.bookList} onPress={onBookPressHandler} /> : <></>}
            imageHeight={imageHeight.current}
        />
    );
}

const stateMapToProps = (state: IApplicationStore) => ({
    collection: state.collectionsState.collection,
    loading: state.collectionsState.loadingCollection,
    fail: state.collectionsState.failFetchingCollection,
});

const dispateToProps = (dispatch: Dispatch) => ({
    setCollection: (id: string) => dispatch(fetchCollection(id)),
    clearCollection: () =>  dispatch(clearCollection())
})

export default connect(stateMapToProps, dispateToProps)(Collection);