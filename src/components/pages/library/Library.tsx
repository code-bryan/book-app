import FilterButton from 'components/molecules/FilterButton';
import BookList from 'components/organisms/books/HorizontalBookList';
import HorizontalCategoryList from 'components/organisms/books/HorizontalCategoryList';
import HorizontalCollectionList from 'components/organisms/books/HorizontalCollectionList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import BooksTestData from 'domain/books/test/BooksTestData';
import CategoryTestData from 'domain/books/test/CategoryTestData';
import CollectionTestData from 'domain/books/test/CollectionTestData';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {

}

const Library: React.FC<IProps> = ({ history }) => {
  const onTapNewBooksHandler = () => {
    history.push('/my-books')
  }

  const onTapDiscoverHandler = () => {
    history.push('/my-discover')
  }

  const onBookPresHandler = (id: string) => {
    history.push('/library/book');
  };

  const onCollectionListHandler = (id: string) => {
    history.push("/library/collection");
  };

  return (
    <DashboardTemplate
        library
        toolbar={<GenericToolbarContent title="Libreria" button={<FilterButton />} />}
        booksTitle={<SectionInformation onTap={onTapNewBooksHandler}>Mis Libros</SectionInformation>}
        bookList={<BookList books={BooksTestData} onBookPress={onBookPresHandler} />}
        categoriesTitle={<SectionInformation>Categorias Favoritas</SectionInformation>}
        categoryList={<HorizontalCategoryList categories={CategoryTestData} />}
        discoverTitle={<SectionInformation onTap={onTapDiscoverHandler}>Mis Audioclases</SectionInformation>}
        collectionList={<HorizontalCollectionList collections={CollectionTestData} onCollectionPress={onCollectionListHandler} />}
    />
  );
};

export default Library;
