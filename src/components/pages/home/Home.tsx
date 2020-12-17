import SearchToolbar from 'components/molecules/SearchToolbar';
import BookList from 'components/organisms/books/HorizontalBookList';
import HorizontalCategoryList from 'components/organisms/books/HorizontalCategoryList';
import HorizontalCollectionList from 'components/organisms/books/HorizontalCollectionList';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import BooksTestData from 'domain/books/test/BooksTestData';
import CategoryTestData from 'domain/books/test/CategoryTestData';
import CollectionTestData from 'domain/books/test/CollectionTestData';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {

}

const Home: React.FC<IProps> = ({ history }) => {
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

  return (
    <DashboardTemplate
        toolbar={<SearchToolbar title="Hola, Bryan Astacio" />}
        booksTitle={<SectionInformation onTap={onTapNewBooksHandler}>Libros nuevos</SectionInformation>}
        bookList={<BookList books={BooksTestData} onBookPress={onBookPresHandler} />}
        categoriesTitle={<SectionInformation>Categorias</SectionInformation>}
        categoryList={<HorizontalCategoryList categories={CategoryTestData} />}
        discoverTitle={<SectionInformation onTap={onTapDiscoverHandler}>Descubre</SectionInformation>}
        collectionList={<HorizontalCollectionList collections={CollectionTestData} onCollectionPress={onCollectionListHandler} />}
    />
  );
};

export default Home;
