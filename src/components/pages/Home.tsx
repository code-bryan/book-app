import BookInformation from 'components/molecules/BookInformation';
import CategoryCard from 'components/molecules/CategoryCard';
import CollectionInformation from 'components/molecules/CollectionInformation';
import SectionInformation from 'components/organisms/SectionInformation';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import React from 'react';

const Home: React.FC = () => {
  return (
    <DashboardTemplate
        newBooksTitle={<SectionInformation>Libros nuevos</SectionInformation>}
        NewBookItem={BookInformation}
        categoriesTitle={<SectionInformation>Categorias</SectionInformation>}
        CategoryItem={CategoryCard}
        discoverTitle={<SectionInformation>Descubre</SectionInformation>}
        DiscoveryItem={CollectionInformation}
    />
  );
};

export default Home;
