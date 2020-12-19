import BookListTemplate from 'components/templates/BookListTemplate';
import React from 'react';
import BookList from 'components/organisms/books/BookList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import FilterButton from 'components/molecules/FilterButton';

const MyBooks = () => {
    return (
        <BookListTemplate
            toolbar={<GenericToolbarContent title="Mis Libros" button={<FilterButton />} />}
            bookList={<BookList books={[]} />}
        />
    )
};

export default MyBooks;