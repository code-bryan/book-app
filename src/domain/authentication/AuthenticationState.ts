import { IAction } from "domain/application/interface/IAction";
import { Dispatch } from "redux";
import User from "./entities/User";
import LoginRequest from "./senders/LoginRequest";
import RegisterRequest from "./senders/RegisterRequest";
import AuthenticationService from "./services/AuthenticationService";

export enum AuthenticationActions {
    AUTHENTICATE = '/authentication/Authenticate',
    LOADING_USER = '/authentication/LOADING_USER',
    FAIL_AUTHENTICATING = '/authentication/FAIL_AUTHENTICATING',
    CLEAN_USER = '/authentication/CLEAN_USER',
    LOADING_LOGOUT = '/authentication/LOADING_LOGOUT',
    FAIL_LOGIN_OUT = '/authentication/FAIL_LOGIN_OUT',
}

export interface IAuthenticationState {
    user: User | undefined;
    loadingUser: boolean;
    failAuthenticating: boolean;
    loadingLogout: boolean;
    failLogout: boolean;
}

const defaultState: IAuthenticationState = {
    user: undefined,
    loadingUser: false,
    failAuthenticating: false,
    loadingLogout: false,
    failLogout: false,
};

const reducer = (state = defaultState, action: IAction): IAuthenticationState => {
    if (action.type === AuthenticationActions.AUTHENTICATE) {
        return Object.assign({}, { ...state, user: action.payload, failAuthenticating: false })
    }

    if (action.type === AuthenticationActions.LOADING_USER) {
        return Object.assign({}, { ...state, loadingUser: action.payload })
    }

    if (action.type === AuthenticationActions.FAIL_AUTHENTICATING) {
        return Object.assign({}, { ...state, user: undefined, failAuthenticating: true })
    }

    if (action.type === AuthenticationActions.CLEAN_USER) {
        return Object.assign({}, { ...state, user: undefined, failAuthenticating: false })
    }

    if (action.type === AuthenticationActions.LOADING_LOGOUT) {
        return Object.assign({}, { ...state, loadingLogout: action.payload })
    }

    if (action.type === AuthenticationActions.FAIL_LOGIN_OUT) {
        return Object.assign({}, { ...state, failLogout: true })
    }

    return state;
};

const service = new AuthenticationService();

export const userLoading = (isLoading: boolean): IAction => ({ type: AuthenticationActions.LOADING_USER, payload: isLoading });
export const setCurrentUser = (currentUser: User): IAction => ({ type: AuthenticationActions.AUTHENTICATE, payload: currentUser });
export const failAuthenticating = (): IAction => ({ type: AuthenticationActions.FAIL_AUTHENTICATING, payload: null });
export const login = (credentials: LoginRequest): any => async (dispath: Dispatch<IAction>) => {
    try {
        dispath(userLoading(true));
        const user = await service.login(credentials);
        dispath(setCurrentUser(user));
    } catch (e) {
        dispath(failAuthenticating());
    } finally {
        dispath(userLoading(false));
    }
}

export const logoutLoading = (isLoading: boolean): IAction => ({ type: AuthenticationActions.LOADING_LOGOUT, payload: isLoading });
export const cleanUser = (): IAction => ({ type: AuthenticationActions.CLEAN_USER, payload: null });
export const failLoginOut = (): IAction => ({ type: AuthenticationActions.FAIL_LOGIN_OUT, payload: null });
export const logout = (): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(logoutLoading(true));
        await service.logout();
        dispatch(cleanUser());
    }
    catch (e) {
        dispatch(failLoginOut());
    } finally {
        dispatch(logoutLoading(false));
    }
}

export const registration = (registration: RegisterRequest): any => async (dispatch: Dispatch<IAction>) => {
    try {
        dispatch(userLoading(true));
        const user = await service.register(registration);
        dispatch(setCurrentUser(user));
    } catch (e) {
        dispatch(failAuthenticating());
    } finally {
        dispatch(userLoading(false));
    }
}

export default reducer;