import { IAction } from "domain/application/interface/IAction"
import { Dispatch } from "redux";
import Collection from "../entities/Collection";
import CollectionService from "../services/CollectionService";

const service = new CollectionService();

export enum CollectionActions {
    FETCH_COLLECTIONS = '/books/collections/FETCH_COLLECTIONS',
    LOADING_COLLECTIONS = '/books/collections/LOADING_COLLECTIONS',
    FAIL_COLLECTIONS = '/books/collections/FAIL_COLLECTIONS',

    FETCH_COLLECTION = '/books/collections/FETCH_COLLECTION',
    LOADING_COLLECTION = '/books/collections/LOADING_COLLECTION',
    FAIL_COLLECTION = '/books/collections/FAIL_COLLECTION',
    CLEAR_COLLECTION = '/books/collections/FAIL_COLLECTION',
}

export interface ICollectionState {
    collections: Collection[];
    loadingCollections: boolean;
    failFetchingCollections: boolean;

    collection: Collection | undefined;
    loadingCollection: boolean;
    failFetchingCollection: boolean;
}


const defaultState: ICollectionState = {
    collections: [],
    loadingCollections: false,
    failFetchingCollections: false,
    collection: undefined,
    loadingCollection: false,
    failFetchingCollection: false,
}

const reducer = (state = defaultState, action: IAction): ICollectionState => {
    if (action.type === CollectionActions.FETCH_COLLECTIONS) {
        return Object.assign({}, { ...state, collections: action.payload });
    }

    if (action.type === CollectionActions.LOADING_COLLECTIONS) {
        return Object.assign({}, { ...state, loadingCollections: action.payload });
    }

    if (action.type === CollectionActions.FAIL_COLLECTIONS) {
        return Object.assign({}, { ...state, failFetchingCollections: true, collections: [] });
    }

    if (action.type === CollectionActions.FETCH_COLLECTION) {
        return Object.assign({}, { ...state, collection: action.payload });
    }

    if (action.type === CollectionActions.LOADING_COLLECTION) {
        return Object.assign({}, { ...state, loadingCollection: action.payload });
    }

    if (action.type === CollectionActions.FAIL_COLLECTION) {
        return Object.assign({}, { ...state, failFetchingCollection: true, collection: undefined });
    }

    if (action.type === CollectionActions.FAIL_COLLECTION) {
        return Object.assign({}, { ...state, failFetchingCollection: false, loadingCollection: false, collection: undefined });
    }

    return state;
}

export const setCollections = (collections: Collection[]): IAction => ({ type: CollectionActions.FETCH_COLLECTIONS, payload: collections });
export const loadingCollections = (isLoading: boolean): IAction => ({ type: CollectionActions.LOADING_COLLECTIONS, payload: isLoading });
export const failFetchingCollections = (): IAction => ({ type: CollectionActions.FAIL_COLLECTIONS, payload: null });

export const fetchCollections = (): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(loadingCollections(true));
        const collections = await service.all();
        dispatch(setCollections(collections));
    } catch (e) {
        dispatch(failFetchingCollections());
    } finally {
        dispatch(loadingCollections(false));
    }
}

export const setCollection = (collection: Collection): IAction<Collection> => ({ type: CollectionActions.FETCH_COLLECTION, payload: collection });
export const loadingCollection = (isLoading: boolean): IAction => ({ type: CollectionActions.LOADING_COLLECTION, payload: isLoading });
export const failFetchingCollection = (): IAction => ({ type: CollectionActions.FAIL_COLLECTION, payload: null });
export const clearCollection = (): IAction => ({ type: CollectionActions.CLEAR_COLLECTION, payload: null });

export const fetchCollection = (id: string): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(loadingCollection(true));
        const collection = await service.find(id);
        dispatch(setCollection(collection));
    } catch (e) {
        dispatch(failFetchingCollection());
    } finally {
        dispatch(loadingCollection(false));
    }
}

export default reducer;
