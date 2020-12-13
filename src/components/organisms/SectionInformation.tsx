import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import SeeAllButton from 'components/molecules/SeeAllButton';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;

const SectionInformation: React.FC = ({ children }) => {
    return (
        <Container>
            <Text color="secondary" size={18} weight={600}>{children}</Text>
            <SeeAllButton />
        </Container>
    );
};

export default SectionInformation;