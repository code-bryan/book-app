import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';
import Text from 'components/atoms/Text';

const Container = styled.div`
    background: ${Colors.CATEGORY_BACKGROUND};
    height: 40px;
    width: auto;
    max-width: 150px;   
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    .active {
        background: ${Colors.CATEGORY_ACTIVE_BACKGROUND};
    }
`;

const CollectionTag = () => {
    return (
        <Container>
            <Text size={14} weight={500} color="secondary">Literatura de ficción</Text>
        </Container> 
    );
};


export default CollectionTag;