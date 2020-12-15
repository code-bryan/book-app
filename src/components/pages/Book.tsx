import BookDescription from 'components/molecules/BookDescription';
import BookDetails from 'components/molecules/BookDetails';
import BookAction from 'components/organisms/BookAction';
import BookTemplate from 'components/templates/BookTemplate';
import React from 'react';

const Book: React.FC = () => {
    return (
        <BookTemplate
            bookDetails={<BookDetails />}
            bookDescription={<BookDescription />}
            bookAction={<BookAction />}
        />
    );
};

export default Book;