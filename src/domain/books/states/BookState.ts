import { IAction } from "domain/application/interface/IAction"
import { Underline } from "react-feather";
import { Dispatch } from "redux";
import Book from "../entities/Book";
import BookService from "../services/BookService";

const service = new BookService();

export enum BookActions {
    FETCH_BOOKS = '/books/books/FETCH_BOOKS',
    LOADING_BOOKS = '/books/books/LOADING_BOOKS',
    FAIL_BOOKS = '/books/books/FAIL_BOOKS',
    FETCH_BOOK = '/books/books/FETCH_BOOK',
    CLEAR_BOOK = '/books/books/CLEAR_BOOK',
    LOADING_BOOK = '/books/books/LOADING_BOOK',
    FAIL_BOOK = '/books/books/FAIL_BOOK',
}

export interface IBookState {
    books: Book[];
    loadingBooks: boolean;
    failFetchingBooks: boolean;

    book: Book | undefined;
    loadingBook: boolean;
    failFetchingBook: boolean;
}

const defaultState: IBookState = {
    books: [],
    loadingBooks: false,
    failFetchingBooks: false,
    book: undefined,
    loadingBook: false,
    failFetchingBook: false,
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

    if (action.type === BookActions.FETCH_BOOK) {
        return Object.assign({}, { ...state, book: action.payload });
    }

    if (action.type === BookActions.CLEAR_BOOK) {
        return Object.assign({}, { ...state, book: undefined });
    }

    if (action.type === BookActions.LOADING_BOOKS) {
        return Object.assign({}, { ...state, loadingBook: action.payload });
    }

    if (action.type === BookActions.FAIL_BOOKS) {
        return Object.assign({}, { ...state, failFetchingBook: true, book: undefined });
    }

    return state;
}

//dispatchers
export const setBooks = (books: Book[]): IAction => ({ type: BookActions.FETCH_BOOKS, payload: books });
export const loadingBooks = (isLoading: boolean): IAction => ({ type: BookActions.LOADING_BOOKS, payload: isLoading });
export const failFetchingBooks = (): IAction => ({ type: BookActions.FAIL_BOOKS, payload: null });

export const setBook = (book: Book): IAction<Book> => ({ type: BookActions.FETCH_BOOK, payload: book });
export const loadingBook = (isLoading: boolean): IAction<boolean> => ({ type: BookActions.LOADING_BOOK, payload: isLoading });
export const failFetchingBook = (): IAction => ({ type: BookActions.FAIL_BOOK, payload: null });
export const clearBook = (): IAction => ({ type: BookActions.CLEAR_BOOK, payload: null });


// thunks
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

export const fetchBook = (id: string): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(loadingBook(true));
        const books = await service.find(id);
        dispatch(setBook(books));
    } catch (e) {
        dispatch(failFetchingBook());
    } finally {
        dispatch(loadingBook(false));
    }
}

export default reducer;
