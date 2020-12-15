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

const BookDescription: React.FC = () => {
    return (
        <Container>
            <Text size={25} color="secondary" weight={600} whiteSpace="none">The Holy Bible</Text>
            
            <Section>
                <Text size={15} color="secondary" weight={500} whiteSpace="break-spaces">
                    <TextSection>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut erat id odio ornare pulvinar. 
                    </TextSection>
                    
                    <TextSection>
                        Sed scelerisque nibh mi, vitae pulvinar ante cursus eget. Nunc rutrum, dolor quis accumsan venenatis, arcu lectus dictum metus, 
                        non sagittis risus lectus eget felis. Vestibulum volutpat ac tellus a volutpat. 
                    </TextSection>

                    <TextSection>
                        Donec facilisis posuere mauris ut viverra. Praesent pretium neque auctor, consequat sapien id, gravida eros. 
                        Phasellus pretium elementum ante eu imperdiet. 
                    </TextSection>
                </Text>
            </Section>
        </Container>
    );
};

export default BookDescription;