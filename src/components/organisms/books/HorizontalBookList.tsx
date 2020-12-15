import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import BookInformation from 'components/molecules/BookInformation';
import Book from 'domain/books/entities/Book';
import React from 'react';

interface IProps {
    books: Book[];
    onBookPress: (id: string) => void;
}

const HorizontalBookList: React.FC<IProps> = ({ books, onBookPress }) => {
    return (
        <HorizontalScrollList paddingSize={15}>
            {books.map((book) => (
                <HorizontalScrollItem key={book.id}>
                    <BookInformation book={book} onPress={(id) => onBookPress?.(id)} />
                </HorizontalScrollItem>
            ))}
        </HorizontalScrollList>
    );
}

export default HorizontalBookList;