import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import playerState, { IPlayerState } from 'domain/player/PlayerState';
import authenticationState, { IAuthenticationState } from 'domain/authentication/AuthenticationState';
import collectionsState, { ICollectionState } from 'domain/books/states/CollectionState';

export interface IApplicationStore {
    playerState: IPlayerState;
    authenticationState: IAuthenticationState;
    collectionsState: ICollectionState;
}

const reducers = combineReducers<IApplicationStore>({
    playerState,
    authenticationState,
    collectionsState
})
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;