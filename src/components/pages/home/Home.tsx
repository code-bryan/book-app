import Text from 'components/atoms/Text';
import Loading from 'components/molecules/Loading';
import SearchToolbar from 'components/molecules/SearchToolbar';
import BookList from 'components/organisms/books/HorizontalBookList';
import HorizontalCollectionList from 'components/organisms/books/HorizontalCollectionList';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import { IApplicationStore } from 'domain/application/Store';
import User from 'domain/authentication/entities/User';
import Book from 'domain/books/entities/Book';
import Category from 'domain/books/entities/Category';
import Collection from 'domain/books/entities/Collection';
import { fetchBooks } from 'domain/books/states/BookState';
import { fetchCategories } from 'domain/books/states/CategoryState';
import { fetchCollections } from 'domain/books/states/CollectionState';
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
  loadingCategories: boolean,
  categories: Category[],
  failCategories: boolean,
  user: User | undefined,
  fetchCollections: () => void;
  fetchBooks: () => void;
  fetchCategories: () => void;
}

const Home: React.FC<IProps> = ({ history, user, loadingCollections, collections, fetchCollections, loadingBooks, books, fetchBooks, loadingCategories, categories, fetchCategories }) => {
  const onTapNewBooksHandler = () => {
    history.push('/new-books')
  }

  const onTapDiscoverHandler = () => {
    history.push('/discover')
  }

  const onBookPresHandler = (id: string) => {
    history.push(`/home/book/${id}`);
  };

  const onCollectionListHandler = (id: string) => {
    history.push(`/home/collection/${id}`);
  };

  const getName = (): string => {
    if (!user) return '';

    return `${user.name} ${user.lastname}`;
  }

  React.useEffect(() => {
    fetchCollections();
    fetchBooks();
    fetchCategories();
  }, []);

  return (
    <DashboardTemplate
        toolbar={<SearchToolbar title={`Hola, ${getName()}`} />}
        booksTitle={<SectionInformation onTap={onTapNewBooksHandler}>Libros nuevos</SectionInformation>}
        bookList={
          <>
            {loadingBooks && <Loading />}
            {(!loadingBooks && books.length > 0) && <BookList books={books} onBookPress={onBookPresHandler} />}
            {(!loadingBooks && books.length <= 0) && <Text color="secondary" width="100%" weight={500} align="center">No hay libros disponibles</Text>}
          </>
        }
        categoriesTitle={false ? <SectionInformation>Categorias</SectionInformation> : <></>}
        categoryList={
          <>
            {/* {loadingCategories && <Loading />}
            {(!loadingCategories && categories.length > 0) && <HorizontalCategoryList categories={categories} />}
            {(!loadingCategories && categories.length <= 0) && <Text color="secondary" width="100%" weight={500} align="center">No hay categoras disponibles</Text>} */}
          </>
        }
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
  loadingCategories: state.categoriesState.loadingCategories,
  categories: state.categoriesState.categories,
  failCategories: state.categoriesState.failFetchingCategories,
  user: state.authenticationState.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchBooks: () => dispatch(fetchBooks()),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
