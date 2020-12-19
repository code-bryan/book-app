import { IAction } from "domain/application/interface/IAction"
import { Dispatch } from "redux";
import Collection from "../entities/Collection";
import CollectionService from "../services/CollectionService";

const service = new CollectionService();

export enum CollectionActions {
    FETCH_CATEGORIES = '/books/collections/FETCH_CATEGORIES',
    LOADING_CATEGORIES = '/books/collections/LOADING_CATEGORIES',
    FAIL_CATEGORIES = '/books/collections/FAIL_CATEGORIES',
}

export interface ICollectionState {
    collections: Collection[];
    loadingCollections: boolean;
    failFetchingCollections: boolean;
}


const defaultState: ICollectionState = {
    collections: [],
    loadingCollections: false,
    failFetchingCollections: false,
}

const reducer = (state = defaultState, action: IAction): ICollectionState => {
    if (action.type === CollectionActions.FETCH_CATEGORIES) {
        return Object.assign({}, { ...state, collections: action.payload });
    }

    if (action.type === CollectionActions.LOADING_CATEGORIES) {
        return Object.assign({}, { ...state, loadingCollections: action.payload });
    }

    if (action.type === CollectionActions.FAIL_CATEGORIES) {
        return Object.assign({}, { ...state, failFetchingCollections: true, collections: [] });
    }

    return state;
}

export const setCollections = (collections: Collection[]): IAction => ({ type: CollectionActions.FETCH_CATEGORIES, payload: collections });
export const loadingCollections = (isLoading: boolean): IAction => ({ type: CollectionActions.LOADING_CATEGORIES, payload: isLoading });
export const failFetchingCollections = (): IAction => ({ type: CollectionActions.FAIL_CATEGORIES, payload: null });

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

export default reducer;
