import BookList from 'components/organisms/HorizontalBookList';
import HorizontalCategoryList from 'components/organisms/HorizontalCategoryList';
import HorizontalCollectionList from 'components/organisms/HorizontalCollectionList';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import BooksTestData from 'domain/books/test/BooksTestData';
import CategoryTestData from 'domain/books/test/CategoryTestData';
import CollectionTestData from 'domain/books/test/CollectionTestData';
import React from 'react';

const Home: React.FC = () => {
  return (
    <DashboardTemplate
        booksTitle={<SectionInformation>Libros nuevos</SectionInformation>}
        bookList={<BookList books={BooksTestData} />}
        categoriesTitle={<SectionInformation>Categorias</SectionInformation>}
        categoryList={<HorizontalCategoryList categories={CategoryTestData} />}
        discoverTitle={<SectionInformation>Descubre</SectionInformation>}
        collectionList={<HorizontalCollectionList collections={CollectionTestData} />}
    />
  );
};

export default Home;
