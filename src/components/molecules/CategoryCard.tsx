import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import { IonButton } from '@ionic/react';
import Category from 'domain/books/entities/Category';

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

interface IProps {
    category: Category;
}

const CategoryCard: React.FC<IProps> = ({category}) => {
    return (
        <Container>
            <Text color="secondary" size={15} weight={500}>{category.name}</Text>
        </Container>
    )
};


export default CategoryCard;