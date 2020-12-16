import { IonContent, IonPage } from '@ionic/react';
import PlayerToolbar from 'components/molecules/PlayerToolbar';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const Section = styled.div`
    margin-bottom: 15px;
    display: flex;

    &.player-controls {
        margin-bottom: 3px;
        width: 90%;
    }
`;

interface IProps {
    rightIcon: React.ReactNode;
    leftIcon: React.ReactNode;
    title: React.ReactNode;
    playerUpperCase: React.ReactNode;
    chapter: React.ReactNode;
    chapterTitle: React.ReactNode;
    playerControls: React.ReactNode;
    icon: React.ReactNode;
}

const PlayerTemplate: React.FC<IProps> = ({ rightIcon, leftIcon, title, playerUpperCase, chapter, chapterTitle, playerControls, icon }) => {
    return (
        <IonPage>
            <PlayerToolbar
                right={rightIcon}
                left={leftIcon}
            />
            <IonContent>
                <Container>
                    <Section>
                        {title}
                    </Section>
                    
                    <Section>
                        {playerUpperCase}
                    </Section>
                    
                    <Section>
                        {chapter}
                    </Section>

                    <Section>
                        {chapterTitle}
                    </Section>

                    <Section className="player-controls">
                        {playerControls}
                    </Section>

                    <Section>
                        {icon}
                    </Section>
                </Container>
            </IonContent>
        </IonPage>
    )
};

export default PlayerTemplate;  