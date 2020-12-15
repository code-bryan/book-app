import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';
import Text from 'components/atoms/Text';

const Container = styled.div`
    background: ${Colors.CATEGORY_BACKGROUND};
    height: 38px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    &.active {
        background: ${Colors.CATEGORY_ACTIVE_BACKGROUND};
    }
`;

const CategoryTag: React.FC = () => (
    <Container className="active">
        <Text size={15} weight={500} color="secondary">Todas</Text>
    </Container>
);

export default CategoryTag;