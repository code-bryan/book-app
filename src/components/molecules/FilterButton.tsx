import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';
import { Filter } from 'react-feather';

const SIZE = 40;

const Container = styled.button`
    background: ${Colors.BUTTON_COLOR};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-width: 0;
`;

interface IProps {
    onTap?: () => void;
}

const FilterButton: React.FC<IProps> = ({ onTap }) => {
    return (
        <Container onClick={() => onTap?.()}>
            <Filter color={Colors.SECONDARY} size={SIZE - 20} />
        </Container>
    );
};

export default FilterButton;