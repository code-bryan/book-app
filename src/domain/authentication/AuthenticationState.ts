import { IAction } from "domain/application/interface/IAction";
import { Dispatch } from "redux";
import User from "./entities/User";
import LoginRequest from "./senders/LoginRequest";
import AuthenticationService from "./services/AuthenticationService";

export enum AuthenticationActions {
    AUTHENTICATE = '/authentication/Authenticate',
    LOADING_USER = '/authentication/LOADING_USER',
    FAIL_AUTHENTICATING = '/authentication/FAIL_AUTHENTICATING',
}

export interface IAuthenticationState {
    user: User | undefined;
    loadingUser: boolean;
    failAuthenticating: boolean;
}

const defaultState: IAuthenticationState = {
    user: undefined,
    loadingUser: false,
    failAuthenticating: false,
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


export default reducer;