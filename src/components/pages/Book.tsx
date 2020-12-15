import BookDescription from 'components/molecules/BookDescription';
import BookDetails from 'components/molecules/BookDetails';
import BookAction from 'components/organisms/BookAction';
import BookTemplate from 'components/templates/BookTemplate';
import { IApplicationStore } from 'domain/application/Store';
import { setActive } from 'domain/player/PlayerState';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Book: React.FC<IProps> = ({ active, setActive }) => {

    const onPlayPressHandler = () => {
        setActive(!active);
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
    active: state.playerState.active
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActive: (active: boolean) => dispatch(setActive(active))
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);