import { IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import SearchInput from 'components/atoms/SearchInput';
import Text from 'components/atoms/Text';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const Toolbar = styled(IonToolbar)`
    --background: ${Colors.PRIMARY};
    --border-color: transparent;
    --padding-top: ${isPlatform('ios') ? 40 : 45}px;
    padding: 0 10px 5px;
`;

const SearchInputContainer = styled.div`
    margin: 15px 0;
`;

interface IProps {
    title: string;
}

const SearchToolbar: React.FC<IProps> = ({ title }) => (
    <>
        <Text color="secondary" size={22} weight={500}>{title}</Text>
        <SearchInputContainer>
            <SearchInput placeholder="Libro, Autor o Colleción" />
        </SearchInputContainer>
    </>
);

export default SearchToolbar;