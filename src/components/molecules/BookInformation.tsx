import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Book from 'domain/books/entities/Book';

const Container = styled.div`
    width: auto;
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
    book: Book;
    onPress?: (id: string) => void;
}

const BookInformation: React.FC<IProps> = ({ book, onPress }) => (
    <Container onClick={() => onPress?.(book.id)}>
        <Image src={book.image} />
        <TextContainer>
            <Text color="secondary" size={14} weight={500}>{book.name}</Text>
            <AuthorText color="secondary" size={14} weight={500}>{book.authors[0]}</AuthorText>
        </TextContainer>
    </Container>
);

export default BookInformation