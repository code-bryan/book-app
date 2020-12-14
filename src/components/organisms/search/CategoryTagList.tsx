import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import CategoryTag from 'components/molecules/CategoryTag';
import React from 'react';
import Text from 'components/atoms/Text';
import styled from 'styled-components';

const TextContainer = styled.div`
    margin-bottom: 10px;
    margin-left: 15px;
`;

const CategoryTagList: React.FC = () => (
    <>
        <TextContainer>
            <Text color="secondary" size={18} weight={600}>Categories</Text>
        </TextContainer>
        <HorizontalScrollList paddingSize={15}>
            <HorizontalScrollItem>
                <CategoryTag /> 
            </HorizontalScrollItem>

            <HorizontalScrollItem>
                <CategoryTag /> 
            </HorizontalScrollItem>

            <HorizontalScrollItem>
                <CategoryTag /> 
            </HorizontalScrollItem>

            <HorizontalScrollItem>
                <CategoryTag /> 
            </HorizontalScrollItem>
        </HorizontalScrollList>
    </>
);

export default CategoryTagList;