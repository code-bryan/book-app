import { IAction } from "domain/application/interface/IAction"
import { Dispatch } from "redux";
import Category from "../entities/Category";
import CategoryService from "../services/CategoryService";

const service = new CategoryService();

export enum CategoryActions {
    FETCH_CATEGORIES = '/books/categories/FETCH_CATEGORIES',
    LOADING_CATEGORIES = '/books/categories/LOADING_CATEGORIES',
    FAIL_CATEGORIES = '/books/categories/FAIL_CATEGORIES',
}

export interface ICategoriesState {
    categories: Category[];
    loadingCategories: boolean;
    failFetchingCategories: boolean;
}

const defaultState: ICategoriesState = {
    categories: [],
    loadingCategories: false,
    failFetchingCategories: false,
}

const reducer = (state = defaultState, action: IAction): ICategoriesState => {
    if (action.type === CategoryActions.FETCH_CATEGORIES) {
        return Object.assign({}, { ...state, categories: action.payload });
    }

    if (action.type === CategoryActions.LOADING_CATEGORIES) {
        return Object.assign({}, { ...state, loadingCategories: action.payload });
    }

    if (action.type === CategoryActions.FAIL_CATEGORIES) {
        return Object.assign({}, { ...state, failFetchingCategories: true, categories: [] });
    }

    return state;
}

export const setCategories = (categories: Category[]): IAction<Category[]> => ({ type: CategoryActions.FETCH_CATEGORIES, payload: categories });
export const loadingCategories = (isLoading: boolean): IAction<boolean> => ({ type: CategoryActions.LOADING_CATEGORIES, payload: isLoading });
export const failFetchingCategories = (): IAction => ({ type: CategoryActions.FAIL_CATEGORIES, payload: null });

export const fetchCategories = (): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(loadingCategories(true));
        const categories = await service.all();
        dispatch(setCategories(categories));
    } catch (e) {
        dispatch(failFetchingCategories());
    } finally {
        dispatch(loadingCategories(false));
    }
}


export default reducer;
