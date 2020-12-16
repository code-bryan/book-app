import { IAction } from "domain/application/interface/IAction";

export enum PlayerStateActions {
    SET_ACTIVE = 'player/state/SET_ACTIVE',
    SET_MINIMIZE = 'player/state/SET_MINIMIZE'
}

export interface IPlayerState {
    active: boolean;
    minimize: boolean;
}

const defaultState: IPlayerState = {
    active: false,
    minimize: false
};

const reducer = (state = defaultState, action: IAction): IPlayerState => {
    if (action.type === PlayerStateActions.SET_ACTIVE) {
        return Object.assign({}, state, { ...state, active: action.payload })
    }

    if (action.type === PlayerStateActions.SET_MINIMIZE) {
        return Object.assign({}, state, { ...state, minimize: action.payload })
    }

    return state;
};

export const setActive = (active: boolean): IAction<boolean> => ({ type: PlayerStateActions.SET_ACTIVE, payload: active });
export const setMinimize = (minimize: boolean): IAction<boolean> => ({ type: PlayerStateActions.SET_MINIMIZE, payload: minimize });

export default reducer;