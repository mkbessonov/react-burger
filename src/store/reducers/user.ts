import {ETypesAction, User, UserActionType} from "../actions/types";

export interface IUser {
    user?: User,
    failed: boolean,
    request: boolean
}

export const user = (state: IUser = {
    failed: false,
    request: false
}, action: UserActionType) => {
    switch (action.type) {
        case ETypesAction.LOGIN:
            return {
                ...state,
                request: true,
                failed: false,
            };
        case ETypesAction.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.user,
                request: false
            };
        }
        case ETypesAction.LOGIN_ERROR: {
            return {
                ...state,
                failed: true,
                request: false
            };
        }
        default:
            return state;
    }
};
