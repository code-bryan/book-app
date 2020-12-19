import BookList from 'components/organisms/books/HorizontalBookList';
import HorizontalCategoryList from 'components/organisms/books/HorizontalCategoryList';
import HorizontalCollectionList from 'components/organisms/books/HorizontalCollectionList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import { IApplicationStore } from 'domain/application/Store';
import { fetchLibrary } from 'domain/books/states/LibraryState';
import CategoryTestData from 'domain/books/test/CategoryTestData';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';
import {default as LibraryClass} from 'domain/books/entities/Library';
import User from 'domain/authentication/entities/User';
import Loading from 'components/molecules/Loading';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
  library: LibraryClass |undefined,
  loading: boolean,
  fail: boolean,
  user: User | undefined,
  fetchLibrary: (id: string) => void;
}

const Library: React.FC<IProps> = ({ history, user, library, loading, fetchLibrary }) => {
  const onTapNewBooksHandler = () => {
    history.push('/my-books')
  }

  const onTapDiscoverHandler = () => {
    history.push('/my-discover')
  }

  const onBookPresHandler = (id: string) => {
    history.push(`/library/book/${id}`);
  };

  const onCollectionListHandler = (id: string) => {
    history.push(`/library/collection/${id}`);
  };

  React.useEffect(() => {
    if (!user) return;
    if (library) return;
    fetchLibrary(user.id);
  }, [user]);

  return (
    <DashboardTemplate
        library
        toolbar={<GenericToolbarContent title="Libreria" />}
        booksTitle={<SectionInformation onTap={onTapNewBooksHandler}>Mis Libros</SectionInformation>}
        bookList={!loading && library ? <BookList books={library.booksList} onBookPress={onBookPresHandler} /> : <Loading /> }
        categoriesTitle={false ? <SectionInformation>Categorias Favoritas</SectionInformation> : <></>}
        categoryList={false ? <HorizontalCategoryList categories={CategoryTestData} /> : <></>}
        discoverTitle={<SectionInformation onTap={onTapDiscoverHandler}>Mis Audioclases</SectionInformation>}
        collectionList={!loading && library ? <HorizontalCollectionList collections={library.collectionsList} onCollectionPress={onCollectionListHandler} /> : <Loading />}
    />
  );
};

const mapStateToProps = (state: IApplicationStore) => ({
  library: state.libraryState.library,
  loading: state.libraryState.loadingLibrary,
  fail: state.libraryState.failFetchingCategories,
  user: state.authenticationState.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchLibrary: (id: string) => dispatch(fetchLibrary(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
