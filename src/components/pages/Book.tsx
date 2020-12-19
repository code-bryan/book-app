import { IonAlert } from '@ionic/react';
import BookDescription from 'components/molecules/BookDescription';
import BookDetails from 'components/molecules/BookDetails';
import Loading from 'components/molecules/Loading';
import BookAction from 'components/organisms/BookAction';
import BookTemplate from 'components/templates/BookTemplate';
import { IApplicationStore } from 'domain/application/Store';
import {default as BookClass} from 'domain/books/entities/Book';
import { clearBook, fetchBook } from 'domain/books/states/BookState';
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

const Book: React.FC<IProps> = ({ history, match, book, loading, fail, active, minimize, setActive, setMinimize, fetchBook }) => {
    const onPlayPressHandler = () => {
        if (active) {
            setMinimize(!minimize)
        } else {
            setActive(!active);
        }
    };

    const onDidDismissHandler = () => {
        history.goBack();
    }

    const onAddPressHandler = () => {

    }

    React.useEffect(() => {
        fetchBook(match.params.id);
    }, []);

    return (
        <>
            <BookTemplate
                bookDetails={!loading && book ? <BookDetails book={book} /> : <></> }
                bookDescription={!loading && book ? <BookDescription description={book!.description} /> : <></>}
                bookAction={!loading && book ? <BookAction playing={active} onPlayPress={onPlayPressHandler} onAddPress={onAddPressHandler} /> : <></>}
                loading={loading ? <Loading /> : <></>}
            />
            <IonAlert 
                isOpen={fail} 
                onDidDismiss={onDidDismissHandler} 
                header="Error en libro"
                message="No se pudo abrir el libro correctamente, intente nuevamente mas tarde" 
                buttons={[
                    {
                        text: 'Aceptar',
                        handler: onDidDismissHandler
                    }
                ]}
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
    clearBook: () => dispatch(clearBook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);