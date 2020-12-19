import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import playerState, { IPlayerState } from 'domain/player/PlayerState';
import authenticationState, { IAuthenticationState } from 'domain/authentication/AuthenticationState';
import collectionsState, { ICollectionState } from 'domain/books/states/CollectionState';
import bookState, { IBookState } from 'domain/books/states/BookState';

export interface IApplicationStore {
    playerState: IPlayerState;
    authenticationState: IAuthenticationState;
    collectionsState: ICollectionState;
    bookState: IBookState,
}

const reducers = combineReducers<IApplicationStore>({
    playerState,
    authenticationState,
    collectionsState,
    bookState,
})
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;