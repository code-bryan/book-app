import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import CategoryCard from 'components/molecules/CategoryCard';
import Category from 'domain/books/entities/Category';
import React from 'react';

interface IProps {
    categories: Category[];
}

const HorizontalCategoryList: React.FC<IProps> = ({ categories }) => {
    return (
        <HorizontalScrollList paddingSize={15}>
            {categories.map((category) => (
                <HorizontalScrollItem key={category.id}>
                    <CategoryCard category={category} />
                </HorizontalScrollItem>
            ))}
        </HorizontalScrollList>
    );
};

export default HorizontalCategoryList;