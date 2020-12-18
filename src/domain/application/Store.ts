import playerState, { IPlayerState } from 'domain/player/PlayerState';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authenticationState, { IAuthenticationState } from 'domain/authentication/AuthenticationState';

export interface IApplicationStore {
    playerState: IPlayerState;
    authenticationState: IAuthenticationState;
}

const reducers = combineReducers<IApplicationStore>({
    playerState,
    authenticationState
})
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;