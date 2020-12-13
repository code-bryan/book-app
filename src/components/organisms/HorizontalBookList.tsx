import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import BookInformation from 'components/molecules/BookInformation';
import Book from 'domain/books/entities/Book';
import React from 'react';

interface IProps {
    books: Book[];
}

const HorizontalBookList: React.FC<IProps> = ({ books }) => {
    return (
        <HorizontalScrollList paddingSize={15}>
            {books.map((book) => (
                <HorizontalScrollItem key={book.id}>
                    <BookInformation book={book} />
                </HorizontalScrollItem>
            ))}
        </HorizontalScrollList>
    );
}

export default HorizontalBookList;