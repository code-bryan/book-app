import ActionButton, { ActionButtonMode } from 'components/molecules/ActionButton';
import React from 'react';
import { Bookmark, Play } from 'react-feather';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;

const BookAction = () => {
    return (
        <Container>
            <ActionButton title="Escuchar" icon={<Play />} mode={ActionButtonMode.OUTLINE} />
            <ActionButton title="Agregar" icon={<Bookmark />} />
        </Container>
    );
};

export default BookAction;