import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

const Img = require('assets/images/book-image.png');
const IMAGE_WIDTH = 130;


const Container = styled.div`
    width: ${IMAGE_WIDTH}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const AuthorText = styled(Text)`
    margin-top: 2.5px;
    opacity: .8;
`;

const BookInformation: React.FC = () => (
    <Container>
        <Image src={Img} width={IMAGE_WIDTH} />
        <TextContainer>
            <Text color="secondary" size={14} weight={500}>The Holy Bible</Text>
            <AuthorText color="secondary" size={14} weight={500}>Steven King</AuthorText>
        </TextContainer>
    </Container>
);

export default BookInformation