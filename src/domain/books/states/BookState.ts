import { IAction } from "domain/application/interface/IAction"

export enum BookActions {
    
}

export interface IBookState {}

const defaultState: IBookState = {}

const reducer = (state = defaultState, action: IAction): IBookState => {
    return state;
}

