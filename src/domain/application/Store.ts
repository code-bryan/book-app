import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import playerState, { IPlayerState } from 'domain/player/PlayerState';
import authenticationState, { IAuthenticationState } from 'domain/authentication/AuthenticationState';
import collectionsState, { ICollectionState } from 'domain/books/states/CollectionState';
import bookState, { IBookState } from 'domain/books/states/BookState';
import categoriesState, { ICategoriesState } from 'domain/books/states/CategoryState';
import libraryState, { ILibraryState } from 'domain/books/states/LibraryState';

export interface IApplicationStore {
    playerState: IPlayerState;
    authenticationState: IAuthenticationState;
    collectionsState: ICollectionState;
    bookState: IBookState,
    categoriesState: ICategoriesState,
    libraryState: ILibraryState,
}

const reducers = combineReducers<IApplicationStore>({
    playerState,
    authenticationState,
    collectionsState,
    bookState,
    categoriesState,
    libraryState
})
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;