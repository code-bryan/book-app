import { IonModal } from '@ionic/react';
import Text from 'components/atoms/Text';
import PlayerControls from 'components/molecules/PlayerControls';
import PlayerFloatingButton from 'components/molecules/PlayerFloatingButton';
import PlayerUpperControls from 'components/molecules/PlayerUpperControls';
import PlayerTemplate from 'components/templates/PlayerTemplate';
import { IApplicationStore } from 'domain/application/Store';
import { setActive, setMinimize } from 'domain/player/PlayerState';
import React from 'react';
import { Download, Minimize2, Play, Pause } from 'react-feather';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Colors from 'theme/Colors';

interface IProps {
    active: boolean;
    minimize: boolean;
    setActive: (active: boolean) => void;
    setMinimize: (active: boolean) => void;
}

const Player: React.FC<IProps> = ({ active, minimize, setActive, setMinimize }) => {

    const onPlayPressHandler = () => {
        setActive(true);
    }

    const onPausePressHandler = () => {
        setActive(false);
    }
    
    const onPlayerFloattinButtonPressHandler = () => {
        setMinimize(false);
    }

    return (
        <>
            {active && minimize && (
                <PlayerFloatingButton onPress={onPlayerFloattinButtonPressHandler}>
                    <Pause size={35} color={Colors.SECONDARY} />
                </PlayerFloatingButton>
            )}
            <IonModal isOpen={active && !minimize} >
                <PlayerTemplate
                    rightIcon={<Minimize2 onClick={() => setMinimize(true)} />}
                    leftIcon={<Download />}
                    title={<Text color="secondary" size={18} weight={500}>The Holy Bible</Text>}
                    chapter={<Text color="secondary" size={18} weight={500}>Primer Capitulo</Text>}
                    chapterTitle={<Text color="secondary" size={28} weight="bold">Genesis</Text>}
                    playerUpperCase={<PlayerUpperControls />}
                    playerControls={<PlayerControls />}
                    icon={active 
                        ? <Pause size={35} color={Colors.SECONDARY} onClick={onPausePressHandler} /> 
                        : <Play size={35} color={Colors.SECONDARY} onClick={onPlayPressHandler} /> }
                />
            </IonModal>
        </>
    );
}

const mapStateToProps = (state: IApplicationStore) => ({
    active: state.playerState.active,
    minimize: state.playerState.minimize,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActive: (active: boolean) => dispatch(setActive(active)),
    setMinimize: (minimize: boolean) => dispatch(setMinimize(minimize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);