import Image from 'components/atoms/Image';
import Book from 'domain/books/entities/Book';
import React from 'react';
import { SkipBack, SkipForward } from 'react-feather';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const Img = require('assets/images/book-image.png');

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    background: transparent;
    outline: none;
    border-radius: 50%;
    color: ${Colors.PRIMARY};

    &.right {
        margin-right: 20px;
    }

    &.left {
        margin-left: 20px;
    }
`;

interface IProps {
    book: Book;
}

const PlayerUpperControls: React.FC<IProps> = ({ book }) => {
    return (
        <Container>
            <Button className="right">
                <SkipBack size={25} />
            </Button>
            
            <Image src={book.image} width={160} height={210} />
            
            <Button  className="left">
                <SkipForward size={25} />
            </Button>
        </Container>
    );
}

export default PlayerUpperControls;