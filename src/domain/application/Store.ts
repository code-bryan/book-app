import playerState, { IPlayerState } from 'domain/player/PlayerState';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IApplicationStore {
    playerState: IPlayerState;
}

const reducers = combineReducers<IApplicationStore>({
    playerState
})
const store = createStore(reducers, composeWithDevTools())

export default store;