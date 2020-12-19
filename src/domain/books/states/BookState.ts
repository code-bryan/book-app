import { IAction } from "domain/application/interface/IAction"
import { Dispatch } from "redux";
import Book from "../entities/Book";
import BookService from "../services/BookService";

const service = new BookService();

export enum BookActions {
    FETCH_BOOKS = '/books/books/FETCH_BOOKS',
    LOADING_BOOKS = '/books/books/LOADING_BOOKS',
    FAIL_BOOKS = '/books/books/FAIL_BOOKS',
}

export interface IBookState {
    books: Book[];
    loadingBooks: boolean;
    failFetchingBooks: boolean;
}

const defaultState: IBookState = {
    books: [],
    loadingBooks: false,
    failFetchingBooks: false,
}

const reducer = (state = defaultState, action: IAction): IBookState => {
    if (action.type === BookActions.FETCH_BOOKS) {
        return Object.assign({}, { ...state, books: action.payload });
    }

    if (action.type === BookActions.LOADING_BOOKS) {
        return Object.assign({}, { ...state, loadingBooks: action.payload });
    }

    if (action.type === BookActions.FAIL_BOOKS) {
        return Object.assign({}, { ...state, failFetchingBooks: true, books: [] });
    }

    return state;
}

export const setBooks = (books: Book[]): IAction => ({ type: BookActions.FETCH_BOOKS, payload: books });
export const loadingBooks = (isLoading: boolean): IAction => ({ type: BookActions.LOADING_BOOKS, payload: isLoading });
export const failFetchingBooks = (): IAction => ({ type: BookActions.FAIL_BOOKS, payload: null });

export const fetchBooks = (): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(loadingBooks(true));
        const books = await service.all();
        dispatch(setBooks(books));
    } catch (e) {
        dispatch(failFetchingBooks());
    } finally {
        dispatch(loadingBooks(false));
    }
}


export default reducer;
