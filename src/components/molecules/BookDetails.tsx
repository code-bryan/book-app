import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import React from 'react';
import styled from 'styled-components';

const Img = require('assets/images/book-image.png');

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
    margin: 0 5px;
`;

const DetailsContainer = styled.div`
    flex: 1;
    margin: 0 5px;
`;


const Section = styled.div`
    padding: 20px 0;

    &.underline {
        border-bottom: 0.5px solid #707070;
    }
`;

const TextDate = styled.div`
    margin-bottom: 5px;
`;

const BookDetails: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={Img} height={175} width={135} />
            </ImageContainer>
           
            <DetailsContainer>
                <Section className="underline">
                    <Text size={18} color="secondary" weight={500} whiteSpace="break-spaces">
                        Por
                        <br />
                        King James
                    </Text>
                </Section>
                

                <Section>
                    <TextDate>
                        <Text size={12} color="secondary"  weight={500} whiteSpace="none">Julio 25 de 2008</Text>
                    </TextDate>
                    <Text size={12} color="secondary"  weight={500} whiteSpace="none">Libreria Santo Thomas</Text>
                </Section>
            </DetailsContainer>
        </Container>
    );
};

export default BookDetails;