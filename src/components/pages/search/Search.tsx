import SearchToolbar from 'components/molecules/SearchToolbar';
import PreviousSearch from 'components/organisms/search/PreviousSearch';
import SearchTemplate, { SearchTemplateMode } from 'components/templates/SearchTemplate';
import CategoryTagList from 'components/organisms/search/CategoryTagList';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import CollectionTagList from 'components/organisms/search/CollectionTagList';
import BookList from 'components/organisms/books/BookList';
import Text from 'components/atoms/Text';

const Search: React.FC<RouteComponentProps<any, StaticContext, unknown>> = () => {
    return (
        <SearchTemplate
            toolbar={<SearchToolbar title="Buscador" />}
            mode={SearchTemplateMode.SEARCH}
            previusList={<PreviousSearch />}
            categoryTagList={<CategoryTagList />}
            collectionTagList={<CollectionTagList />}
            bookList={
                <BookList books={[]} title={<Text weight={600} color="secondary" >Libros</Text>} />
            }
        />
    );
}

export default Search;