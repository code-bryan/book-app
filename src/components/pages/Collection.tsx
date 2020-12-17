import BookList from 'components/organisms/books/BookList';
import CollectionTemplate from 'components/templates/CollectionTemplate';
import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import Text from 'components/atoms/Text';
import Image from 'components/atoms/Image';

const Img = require('assets/images/big-collection-image.png');

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    
}

const Collection: React.FC<IProps> = () => {
    const imageHeight = React.useRef(window.innerHeight / 3.5);

    return(
        <CollectionTemplate
            title={<Text color="secondary" weight={"bold"}>Ideas - Libros motivaciones</Text>}
            image={<Image src={Img} width={window.innerWidth} height={imageHeight.current} />}
            bookListTitle={<Text color="secondary" weight={500}>Libros</Text>}
            bookList={<BookList />}
            imageHeight={imageHeight.current}
        />
    );
}

export default Collection;