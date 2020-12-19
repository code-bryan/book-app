import BookListTemplate from 'components/templates/BookListTemplate';
import React from 'react';
import BookList from 'components/organisms/books/BookList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import { connect } from 'react-redux';
import { IApplicationStore } from 'domain/application/Store';
import { fetchBooks } from 'domain/books/states/BookState';
import { RouteComponentProps, StaticContext } from 'react-router';
import Book from 'domain/books/entities/Book';
import { Dispatch } from 'redux';
import Loading from 'components/molecules/Loading';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    loadingBooks: boolean,
    books: Book[],
    failBooks: boolean,
    fetchBooks: () => void;
  }

const NewBookList: React.FC<IProps> = ({ books, loadingBooks, failBooks, history, fetchBooks }) => {
    const onBookPressHandler = (id: string) => history.push(`/home/book/${id}`);

    React.useEffect(() => {
        if (books.length > 0) return;
        fetchBooks();
    }, []);

    return (
        <BookListTemplate
            toolbar={<GenericToolbarContent title="Libros Nuevos" />}
            bookList={!loadingBooks ? <BookList books={books} onPress={onBookPressHandler} />: <Loading />}
        />
    )
};

const mapStateToProps = (state: IApplicationStore) => ({
    loadingBooks: state.bookState.loadingBooks,
    books: state.bookState.books,
    failBooks: state.bookState.failFetchingBooks,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBookList);