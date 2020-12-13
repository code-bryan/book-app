import React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import { IonSlide } from '@ionic/react';

const Img = require('assets/images/book-image.png');
const IMAGE_WIDTH = 130;

const Container = styled(IonSlide)`
    width: ${IMAGE_WIDTH}px;
    display: flex;
    flex-direction: column;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const AuthorText = styled(Text)`
    margin-top: 2.5px;
    opacity: .8;
`;

const BookInformation = () => {
    return (
        <Container>
            <Image src={Img} width={IMAGE_WIDTH} />
            <TextContainer>
                <Text color="secondary" size={14} weight={500}>The Holy Bible</Text>
                <AuthorText color="secondary" size={14} weight={500}>Steven King</AuthorText>
            </TextContainer>
        </Container>
    );
};

export default BookInformation