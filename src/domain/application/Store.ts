import playerState, { IPlayerState } from 'domain/player/PlayerState'
import { combineReducers, createStore } from 'redux'

export interface IApplicationStore {
    playerState: IPlayerState;
}

const reducers = combineReducers<IApplicationStore>({
    playerState
})
const store = createStore(reducers)

export default store;