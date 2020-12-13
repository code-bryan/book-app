import BookListTemplate from 'components/templates/BookListTemplate';
import React from 'react';
import BookList from 'components/organisms/books/BookList';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import FilterButton from 'components/molecules/FilterButton';

const NewBookList = () => {
    return (
        <BookListTemplate
            toolbar={<GenericToolbarContent button={<FilterButton />} />}
            bookList={<BookList />}
        />
    )
};

export default NewBookList;