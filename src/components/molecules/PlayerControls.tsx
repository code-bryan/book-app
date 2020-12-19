import React, { RefAttributes } from 'react';
import styled from 'styled-components';
import PlayerRange from 'components/atoms/PlayerRange';
import Text from 'components/atoms/Text';
import { IonRange } from '@ionic/react';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

interface IProps {
    progress: number;
    onProgressBarChange: (value: number) => void;
}

const PlayerControls: React.FC<IProps> = ({ progress, onProgressBarChange }) => {
    return (
        <Container>
            {/* <Text color="secondary" size={11} weight={500}>10:50</Text> */}
            <PlayerRange mode="md" min={1} max={100} value={progress} onIonChange={(e) => onProgressBarChange?.(e.detail.value as number)} />
            {/* <Text color="secondary" size={11} weight={500}>10:50</Text> */}
        </Container>
    );
};

export default PlayerControls;