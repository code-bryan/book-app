import ActionButton, { ActionButtonMode } from 'components/molecules/ActionButton';
import React from 'react';
import { Bookmark, Pause, Play } from 'react-feather';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;

interface IProps {
    playing: boolean;
    onPlayPress?: () => void;
    onAddPress?: () => void;
}

const BookAction: React.FC<IProps> = ({ playing, onPlayPress, onAddPress }) => (
    <Container>
        <ActionButton title="Escuchar" icon={playing ? <Pause /> : <Play />} mode={ActionButtonMode.OUTLINE} onTap={() => onPlayPress?.()} />
        <ActionButton title="Agregar" icon={<Bookmark />} onTap={() => onAddPress?.()} />
    </Container>
);

export default BookAction;