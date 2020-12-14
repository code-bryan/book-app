import HorizontalScrollList from 'components/atoms/HorizontalScrollList';
import { HorizontalScrollItem } from 'components/atoms/ScrollItem';
import React from 'react';
import Text from 'components/atoms/Text';
import styled from 'styled-components';
import CollectionTag from 'components/molecules/CollectionTag';

const TextContainer = styled.div`
    margin-bottom: 10px;
    margin-left: 15px;
`;

const CollectionTagList: React.FC = () => (
    <>
        <TextContainer>
            <Text color="secondary" size={18} weight={600}>Audioclases</Text>
        </TextContainer>
        <HorizontalScrollList paddingSize={15}>
            <HorizontalScrollItem>
                <CollectionTag /> 
            </HorizontalScrollItem>

            <HorizontalScrollItem>
                <CollectionTag /> 
            </HorizontalScrollItem>

            <HorizontalScrollItem>
                <CollectionTag /> 
            </HorizontalScrollItem>

            <HorizontalScrollItem>
                <CollectionTag /> 
            </HorizontalScrollItem>
        </HorizontalScrollList>
    </>
);

export default CollectionTagList;