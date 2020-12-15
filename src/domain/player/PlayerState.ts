import { IAction } from "domain/application/interface/IAction";

export enum PlayerStateActions {
    SET_ACTIVE = 'player/state/SET_ACTIVE'
}

export interface IPlayerState {
    active: boolean;
}

const defaultState: IPlayerState = {
    active: false
};

const reducer = (state = defaultState, action: IAction): IPlayerState => {
    if (action.type === PlayerStateActions.SET_ACTIVE) {
        return Object.assign({}, state, { ...state, active: action.payload })
    }

    return state;
};

export const setActive = (active: boolean): IAction<boolean> => ({ type: PlayerStateActions.SET_ACTIVE, payload: active })

export default reducer;