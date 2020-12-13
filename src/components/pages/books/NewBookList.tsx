import BookListTemplate from 'components/templates/BookListTemplate';
import React from 'react';
import BookList from 'components/organisms/books/BookList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';

const NewBookList = () => {
    return (
        <BookListTemplate
            toolbar={<GenericToolbarContent />}
            bookList={<BookList />}
        />
    )
};

export default NewBookList;