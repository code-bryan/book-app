import { IonCol, IonGrid, IonRow } from '@ionic/react';
import BookInformation from 'components/molecules/BookInformation';
import Book from 'domain/books/entities/Book';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 5px;
`;

const TitleContainer = styled.div`
    margin-left: 10px;
`;

interface IProps {
    title?: React.ReactNode
    books: Book[];
    onPress?: (id: string) => void;
}

const BookList: React.FC<IProps> = ({ title, books, onPress }) => {
    return (
        <Container>
            {title && (
                <TitleContainer>
                    {title}
                </TitleContainer>
            )}
            <IonGrid>
                <IonRow>
                    {books.map((book) => (
                        <IonCol size="6" key={book.id}>
                            <BookInformation book={book} onPress={(id) => onPress?.(id)} />
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </Container>
    );
};

export default BookList;