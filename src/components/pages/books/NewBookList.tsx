import BackButton from 'components/molecules/BackButton';
import BookListTemplate from 'components/templates/BookListTemplate';
import Text from 'components/atoms/Text';
import React from 'react';
import BookList from 'components/organisms/books/BookList';

const NewBookList = () => {
    return (
        <BookListTemplate
            toolbar={<>
                <BackButton />

                <Text color="secondary" size={30} weight={500}>Libros Nuevos</Text>
            </>}
            bookList={<BookList />}
        />
    )
};

export default NewBookList;