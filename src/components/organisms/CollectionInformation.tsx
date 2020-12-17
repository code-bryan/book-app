import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Collection from 'domain/books/entities/Collection';
import CollectionQuote from '../molecules/CollectionQuote';

const Container = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TextContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;


interface IProps {
    data: Collection;
    width?: number;
    height?: number;
    onCollectionPress?: (id: string) => void;
}

const CollectionInformation: React.FC<IProps> = ({ data, width, height, onCollectionPress }) => {
    return (
        <Container onClick={() => onCollectionPress?.(data.id)}>
            <Image src={data.image} height={height} width={width} />
            <TextContainer>
                <Text color="secondary" size={12} weight={"bold"} width={`${width}px`}>{data.name}</Text>
                {data.quotes.map((quote, index) => (
                    <CollectionQuote key={`${quote}-${index}`}>{quote}</CollectionQuote>
                ))}
            </TextContainer>
        </Container>
    );
}

CollectionInformation.defaultProps = {
    width: 176,
    height: 176,
}

export default CollectionInformation;