import React from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text';
import PreviousSearchItem from 'components/molecules/PreviousSearchItem';

const List = styled.div`
    margin-top: 10px;
`;

const PreviousSearch = () => {

    return (
        <>
            <Text color="secondary" weight="bold" size={15}>Anteriores búsquedas</Text>
            
            <List>
                <PreviousSearchItem />
            </List>
            
        </>
    )
}

export default PreviousSearch;