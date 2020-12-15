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
    onPlayPress?: (active: boolean) => void;
    onAddPress?: () => void;
}

const BookAction: React.FC<IProps> = ({ onPlayPress, onAddPress }) => {
    const [playing, setPlaying] = React.useState<boolean>(false);

    const onTapPlayHandler = () => {
        setPlaying((current) => {
            onPlayPress?.(!current)
            return !current;
        });
    };

    return (
        <Container>
            <ActionButton title="Escuchar" icon={playing ? <Pause /> : <Play />} mode={ActionButtonMode.OUTLINE} onTap={onTapPlayHandler} />
            <ActionButton title="Agregar" icon={<Bookmark />} onTap={() => onAddPress?.()} />
        </Container>
    );
};

export default BookAction;