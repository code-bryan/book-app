import { IAction } from "domain/application/interface/IAction"
import { Dispatch } from "redux";
import Library from "../entities/Library";
import { LibraryService } from "../services/LibraryService";

const service = new LibraryService();

export enum LibraryActions {
    FETCH_LIBRARY = '/books/categories/FETCH_LIBRARY',
    LOADING_LIBRARY = '/books/categories/LOADING_LIBRARY',
    FAIL_LIBRARY = '/books/categories/FAIL_LIBRARY',
}

export interface ILibraryState {
    library: Library | undefined;
    loadingLibrary: boolean;
    failFetchingCategories: boolean;
}

const defaultState: ILibraryState = {
    library: undefined,
    loadingLibrary: false,
    failFetchingCategories: false,
}

const reducer = (state = defaultState, action: IAction): ILibraryState => {
    if (action.type === LibraryActions.FETCH_LIBRARY) {
        return Object.assign({}, { ...state, library: action.payload });
    }

    if (action.type === LibraryActions.LOADING_LIBRARY) {
        return Object.assign({}, { ...state, loadingLibrary: action.payload });
    }

    if (action.type === LibraryActions.FAIL_LIBRARY) {
        return Object.assign({}, { ...state, failFetchingCategories: true, library: undefined });
    }

    return state;
}

export const setLibrary = (library: Library): IAction<Library> => ({ type: LibraryActions.FETCH_LIBRARY, payload: library });
export const loadingLibrary = (isLoading: boolean): IAction<boolean> => ({ type: LibraryActions.LOADING_LIBRARY, payload: isLoading });
export const failFetchingLibrary = (): IAction => ({ type: LibraryActions.FAIL_LIBRARY, payload: null });

export const fetchLibrary = (user_id: string): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(loadingLibrary(true));
        const library = await service.get(user_id);
        dispatch(setLibrary(library));
    } catch (e) {
        dispatch(failFetchingLibrary());
    } finally {
        dispatch(loadingLibrary(false));
    }
}


export default reducer;
