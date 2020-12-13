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

interface IProps {
    onTap?: () => void;
}

const SectionInformation: React.FC<IProps> = ({ children, onTap }) => {
    return (
        <Container>
            <Text color="secondary" size={18} weight={600}>{children}</Text>
            <SeeAllButton onTap={() => onTap?.()} />
        </Container>
    );
};

export default SectionInformation;