import BookDescription from 'components/molecules/BookDescription';
import BookDetails from 'components/molecules/BookDetails';
import Loading from 'components/molecules/Loading';
import BookAction from 'components/organisms/BookAction';
import BookTemplate from 'components/templates/BookTemplate';
import { IApplicationStore } from 'domain/application/Store';
import {default as BookClass} from 'domain/books/entities/Book';
import { fetchBook } from 'domain/books/states/BookState';
import { setActive, setMinimize } from 'domain/player/PlayerState';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    active: boolean;
    minimize: boolean;
    book: BookClass | undefined;
    loading: boolean,
    fail: boolean,
    setActive: (active: boolean) => void;
    setMinimize: (minimize: boolean) => void;
    fetchBook: (id: string) => void;
}

const Book: React.FC<IProps> = ({ match, book, loading, fail, active, minimize, setActive, setMinimize, fetchBook }) => {

    const onPlayPressHandler = () => {
        if (active) {
            setMinimize(!minimize)
        } else {
            setActive(!active);
        }
    };

    React.useEffect(() => {
        // fetchBook(match.params.id);
        fetchBook(`6EJR4k6vgmxqt4IbTczV`);
    }, []);

    return (
        <>
            <BookTemplate
                bookDetails={!loading && book ? <BookDetails book={book} /> : <></> }
                bookDescription={!loading && book ? <BookDescription description={book!.description} /> : <></>}
                bookAction={!loading && book ? <BookAction playing={active} onPlayPress={onPlayPressHandler} /> : <></>}
                loading={loading ? <Loading /> : <></>}
            />
        </>
    );
};

const mapStateToProps = (state: IApplicationStore) => ({
    active: state.playerState.active,
    minimize: state.playerState.minimize,
    book: state.bookState.book,
    loading: state.bookState.loadingBook,
    fail: state.bookState.failFetchingBook
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActive: (active: boolean) => dispatch(setActive(active)),
    setMinimize: (minimize: boolean) => dispatch(setMinimize(minimize)),
    fetchBook: (id: string) => dispatch(fetchBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);