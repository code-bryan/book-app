import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import { IonButton } from '@ionic/react';

const Container = styled(IonButton)`
    width: 130px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    letter-spacing: normal;
    text-transform: none;
    --background: #9490C3;
    --border-radius: 5px;
    --box-shadow: none;
`;

const CategoryCard: React.FC = ({children}) => {
    return (
        <Container>
            <Text color="secondary" size={15} weight={500}>{children}</Text>
        </Container>
    )
};


export default CategoryCard;