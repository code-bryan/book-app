import { IonCol, IonGrid, IonRow } from '@ionic/react';
import BookInformation from 'components/molecules/BookInformation';
import BooksTestData from 'domain/books/test/BooksTestData';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 5px;
`;

const BookList = () => {
    return (
        <Container>
            <IonGrid>
                <IonRow>
                    {BooksTestData.map((book) => (
                        <IonCol size="6" key={book.id}>
                            <BookInformation book={book} />
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </Container>
    );
};

export default BookList;