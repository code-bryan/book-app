import SearchInput from 'components/atoms/SearchInput';
import Text from 'components/atoms/Text';
import React from 'react';
import styled from 'styled-components';

const SearchInputContainer = styled.div`
    margin: 15px 0;
`;

interface IProps {
    title: string;
}

const SearchToolbar: React.FC<IProps> = ({title}) => (
    <>
        <Text color="secondary" size={22} weight={500}>{title}</Text>
        <SearchInputContainer>
            <SearchInput placeholder="Libro, Autor o Colleción" />
        </SearchInputContainer>
    </>
);

export default SearchToolbar;