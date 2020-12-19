import Text from 'components/atoms/Text';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Section = styled.div`
    margin-top: 10px;
`;

const TextSection = styled.div`
    margin-bottom: 10px;
`;

interface IProps {
    description: string;
}

const BookDescription: React.FC<IProps> = ({ description }) => {
    return (
        <Container>
            <Text size={25} color="secondary" weight={600} whiteSpace="none">The Holy Bible</Text>
            
            <Section>
                <Text size={15} color="secondary" weight={500} whiteSpace="break-spaces">
                    <TextSection>
                        {description}
                    </TextSection>
                </Text>
            </Section>
        </Container>
    );
};

export default BookDescription;