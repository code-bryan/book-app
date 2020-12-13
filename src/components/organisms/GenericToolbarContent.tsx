import BackButton from 'components/molecules/BackButton';
import React from 'react';
import Text from 'components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TextContainer = styled.div`
    padding: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

interface IProps {
    button?: React.ReactNode;
}

const GenericToolbarContent: React.FC<IProps> = ({ button }) => {
    return (
        <Container>
            <BackButton />
            
            <TextContainer>
                <Text color="secondary" size={30} weight={500}>Libros Nuevos</Text>
                {button && button}
            </TextContainer>
        </Container>        
    )
};

export default GenericToolbarContent;