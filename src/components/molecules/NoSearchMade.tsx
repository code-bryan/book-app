import SearchSvg from 'components/atoms/SearchSvg';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TextContainer = styled.div`
    width: 50%;
    margin-top: 10px;
`;

const NoSearchMade = () => (
    <Container>
        <SearchSvg />
        <TextContainer>
            <Text color="secondary" weight={500} whiteSpace="none" align="center">Busca dentro de +500,000 libros</Text>
        </TextContainer>
    </Container>
);

export default NoSearchMade;