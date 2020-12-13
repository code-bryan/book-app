import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Book from 'domain/books/entities/Book';

const IMAGE_WIDTH = 130;


const Container = styled.div`
    width: ${IMAGE_WIDTH}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const AuthorText = styled(Text)`
    margin-top: 2.5px;
    opacity: .8;
`;

interface IProps {
    data: Book;
}

const BookInformation: React.FC<IProps> = ({ data }) => (
    <Container>
        <Image src={data.image} width={IMAGE_WIDTH} />
        <TextContainer>
            <Text color="secondary" size={14} weight={500}>{data.name}</Text>
            <AuthorText color="secondary" size={14} weight={500}>{data.authors[0]}</AuthorText>
        </TextContainer>
    </Container>
);

export default BookInformation