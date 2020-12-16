import React from 'react';
import styled from 'styled-components';
import PlayerRange from 'components/atoms/PlayerRange';
import Text from 'components/atoms/Text';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const PlayerControls: React.FC = () => {
    return (
        <Container>
            <Text color="secondary" size={11} weight={500}>10:50</Text>
            <PlayerRange mode="md" min={1} max={100} value={25} />
            <Text color="secondary" size={11} weight={500}>10:50</Text>
        </Container>
    );
};

export default PlayerControls;