import SearchToolbar from 'components/molecules/SearchToolbar';
import SearchTemplate from 'components/templates/SearchTemplate';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {

}

const Search: React.FC<IProps> = ({}) => {
    return (
        <SearchTemplate
            toolbar={<SearchToolbar title="Buscador" />}
        />
    );
}

export default Search;