import BookInformation from 'components/molecules/BookInformation';
import CategoryCard from 'components/molecules/CategoryCard';
import CollectionInformation from 'components/molecules/CollectionInformation';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import BooksTestData from 'domain/books/test/BooksTestData';
import CategoryTestData from 'domain/books/test/CategoryTestData';
import CollectionTestData from 'domain/books/test/CollectionTestData';
import React from 'react';

const Home: React.FC = () => {
  return (
    <DashboardTemplate
        newBooks={BooksTestData}
        newBooksTitle={<SectionInformation>Libros nuevos</SectionInformation>}
        newBookItem={BookInformation}

        categories={CategoryTestData}
        categoriesTitle={<SectionInformation>Categorias</SectionInformation>}
        categoryItem={CategoryCard}

        collections={CollectionTestData}
        discoverTitle={<SectionInformation>Descubre</SectionInformation>}
        discoveryItem={CollectionInformation}
    />
  );
};

export default Home;
