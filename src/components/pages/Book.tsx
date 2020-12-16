import BookDescription from 'components/molecules/BookDescription';
import BookDetails from 'components/molecules/BookDetails';
import BookAction from 'components/organisms/BookAction';
import BookTemplate from 'components/templates/BookTemplate';
import { IApplicationStore } from 'domain/application/Store';
import { setActive, setMinimize } from 'domain/player/PlayerState';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    active: boolean;
    minimize: boolean;
    setActive: (active: boolean) => void;
    setMinimize: (minimize: boolean) => void;
}

const Book: React.FC<IProps> = ({ active, minimize, setActive, setMinimize }) => {

    const onPlayPressHandler = () => {
        if (active) {
            setMinimize(!minimize)
        } else {
            setActive(!active);
        }
    };

    return (
        <BookTemplate
            bookDetails={<BookDetails />}
            bookDescription={<BookDescription />}
            bookAction={<BookAction playing={active} onPlayPress={onPlayPressHandler} />}
        />
    );
};

const mapStateToProps = (state: IApplicationStore) => ({
    active: state.playerState.active,
    minimize: state.playerState.minimize,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActive: (active: boolean) => dispatch(setActive(active)),
    setMinimize: (minimize: boolean) => dispatch(setMinimize(minimize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);