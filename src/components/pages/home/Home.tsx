import { IonLoading, IonSpinner } from '@ionic/react';
import Text from 'components/atoms/Text';
import Loading from 'components/molecules/Loading';
import SearchToolbar from 'components/molecules/SearchToolbar';
import BookList from 'components/organisms/books/HorizontalBookList';
import HorizontalCategoryList from 'components/organisms/books/HorizontalCategoryList';
import HorizontalCollectionList from 'components/organisms/books/HorizontalCollectionList';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import { IApplicationStore } from 'domain/application/Store';
import Book from 'domain/books/entities/Book';
import Collection from 'domain/books/entities/Collection';
import { fetchBooks } from 'domain/books/states/BookState';
import { fetchCollections } from 'domain/books/states/CollectionState';
import BooksTestData from 'domain/books/test/BooksTestData';
import CategoryTestData from 'domain/books/test/CategoryTestData';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
  loadingCollections: boolean,
  collections: Collection[],
  failCollections: boolean,
  loadingBooks: boolean,
  books: Book[],
  failBooks: boolean,
  fetchCollections: () => void;
  fetchBooks: () => void;
}

const Home: React.FC<IProps> = ({ history, loadingCollections, collections, fetchCollections, loadingBooks, books, fetchBooks }) => {
  const onTapNewBooksHandler = () => {
    history.push('/new-books')
  }

  const onTapDiscoverHandler = () => {
    history.push('/discover')
  }

  const onBookPresHandler = (id: string) => {
    history.push('/home/book');
  };

  const onCollectionListHandler = (id: string) => {
    history.push("/home/collection");
  };


  React.useEffect(() => {
    fetchCollections();
    fetchBooks();
  }, [])

  return (
    <DashboardTemplate
        toolbar={<SearchToolbar title="Hola, Bryan Astacio" />}
        booksTitle={<SectionInformation onTap={onTapNewBooksHandler}>Libros nuevos</SectionInformation>}
        bookList={
          <>
            {loadingBooks && <Loading />}
            {(!loadingBooks && books.length > 0) && <BookList books={books} onBookPress={onBookPresHandler} />}
            {(!loadingBooks && books.length <= 0) && <Text color="secondary" width="100%" weight={500} align="center">No hay libros disponibles</Text>}
          </>
        }
        categoriesTitle={<SectionInformation>Categorias</SectionInformation>}
        categoryList={<HorizontalCategoryList categories={CategoryTestData} />}
        discoverTitle={<SectionInformation onTap={onTapDiscoverHandler}>Descubre</SectionInformation>}
        collectionList={
          <>
            {loadingCollections && <Loading />}
            {(!loadingCollections && collections.length > 0) && <HorizontalCollectionList collections={collections} onCollectionPress={onCollectionListHandler} />}
            {(!loadingCollections && collections.length <= 0) && <Text color="secondary" width="100%" weight={500} align="center">No hay colleciones disponibles</Text>}
          </>
        }
    />
  );
};

const mapStateToProps = (state: IApplicationStore) => ({
  loadingCollections: state.collectionsState.loadingCollections,
  collections: state.collectionsState.collections,
  failCollections: state.collectionsState.failFetchingCollections,
  loadingBooks: state.bookState.loadingBooks,
  books: state.bookState.books,
  failBooks: state.bookState.failFetchingBooks,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
