import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Colors from 'theme/Colors';
import Collection from 'domain/books/entities/Collection';

const Img = require('assets/images/collection-image.png');
const IMAGE_WIDTH = 176;

const Container = styled.div`
    width: ${IMAGE_WIDTH}px;
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

const DotTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;

const DotIcon = styled.div`
    background: ${Colors.SECONDARY};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 2.5px;
`;

interface IProps {
    data: Collection;
}

const CollectionInformation: React.FC<IProps> = ({ data }) => {
    return (
        <Container>
            <Image src={data.image} height={176} width={IMAGE_WIDTH} />
            <TextContainer>
                <Text color="secondary" size={12} weight={"bold"}>{data.name}</Text>
                {data.quotes.map((quote, index) => (
                    <DotTextContainer key={`${quote}-${index}`}>
                        <DotIcon />
                        <Text color="secondary" size={11} weight={600}>{quote}</Text>
                    </DotTextContainer>
                ))}
            </TextContainer>
        </Container>
    );
}

export default CollectionInformation;