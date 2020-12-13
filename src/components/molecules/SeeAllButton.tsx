import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import { ChevronRight } from 'react-feather';
import Colors from 'theme/Colors';

const Container = styled.button`
    background: transparent;
    outline: none;
    border-width: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`; 

const Icon = styled(ChevronRight)`
    color: ${Colors.PRIMARY};
    width: 20px;
    padding: 0;
    margin: 0;
`;

const SeeAllButton = () => {
    return (
        <Container>
            <Text size={12}>Ver Todos</Text>
            <Icon />
        </Container>
    );
};

export default SeeAllButton;