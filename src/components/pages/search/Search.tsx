import SearchToolbar from 'components/molecules/SearchToolbar';
import PreviousSearch from 'components/organisms/search/PreviousSearch';
import SearchTemplate, { SearchTemplateMode } from 'components/templates/SearchTemplate';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

const Search: React.FC<RouteComponentProps<any, StaticContext, unknown>> = () => {
    return (
        <SearchTemplate
            toolbar={<SearchToolbar title="Buscador" />}
            mode={SearchTemplateMode.PREVIOUS}
            previusList={<PreviousSearch />}
        />
    );
}

export default Search;