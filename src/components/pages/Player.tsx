import { IonModal } from '@ionic/react';
import Text from 'components/atoms/Text';
import PlayerControls from 'components/molecules/PlayerControls';
import PlayerFloatingButton from 'components/molecules/PlayerFloatingButton';
import PlayerUpperControls from 'components/molecules/PlayerUpperControls';
import PlayerTemplate from 'components/templates/PlayerTemplate';
import { IApplicationStore } from 'domain/application/Store';
import Book from 'domain/books/entities/Book';
import { setActive, setMinimize } from 'domain/player/PlayerState';
import React from 'react';
import { Download, Minimize2, Play, Pause } from 'react-feather';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Colors from 'theme/Colors';
import { Howl } from 'howler';

interface IProps {
    book: Book | undefined;
    active: boolean;
    minimize: boolean;
    setActive: (active: boolean) => void;
    setMinimize: (active: boolean) => void;
}

const Player: React.FC<IProps> = ({ book, active, minimize, setActive, setMinimize }) => {
    const [progress, setProgress] = React.useState<number>(0);
    const [playing, setPlaying]= React.useState(false);
    const player = React.useRef<Howl | null>(null);

    const updateProgress = () => {
        const { current } = player;
        if (!current) return;

        const seek = current.seek();
        setProgress((Number(seek) / current.duration()) * 100 || 0);
        setTimeout(() => updateProgress(), 100);
    }

    const onPlayPressHandler = () => {
        if (player.current) {
            player.current.stop();
        }

        player.current = new Howl({ 
            src: book!.chapter,
            onplay: () => {
                setPlaying(true);
                updateProgress();
            },
            onend: () => setPlaying(false)
        });
        player.current.play();
    }

    const onPausePressHandler = () => {
        player.current?.pause();
        setPlaying(false)
    }
    
    const onPlayerFloattinButtonPressHandler = () => {
        setMinimize(false);
    }

    const seek = (value: number) => {
        const { current } = player;
        if (!current) return;

        const duration = current.duration();
        current.seek(duration * (value / 100))
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
                    leftIcon={<></>}
                    title={<Text color="secondary" size={18} weight={500}>{book ? book.name: ''}</Text>}
                    chapter={<Text color="secondary" size={18} weight={500}>Chapter 1</Text>}
                    chapterTitle={<Text color="secondary" size={28} weight="bold">Preface</Text>}
                    playerUpperCase={book ? <PlayerUpperControls book={book} /> : <></>}
                    playerControls={<PlayerControls onProgressBarChange={seek} progress={progress} />}
                    icon={playing 
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
    book: state.bookState.book,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActive: (active: boolean) => dispatch(setActive(active)),
    setMinimize: (minimize: boolean) => dispatch(setMinimize(minimize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);