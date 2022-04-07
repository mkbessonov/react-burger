import {ETypesAction, User} from "../actions/types";
import {IUser, user} from "./user";

const initialState: IUser = {
    failed: false,
    request: false
}

const userState: User = {
    email: 'test-email',
    name: 'test'
};

describe('user reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(user(undefined, {type: null})).toEqual(initialState)
    })
    it('login', () => {
        expect(user(undefined, {
            type: ETypesAction.LOGIN,
        })).toEqual({...initialState, request: true})
    })
    it('login success', () => {
        expect(user(undefined, {
            type: ETypesAction.LOGIN_SUCCESS,
            user: userState
        })).toEqual({...initialState, user: userState})
    })
    it('login error', () => {
        expect(user(undefined, {
            type: ETypesAction.LOGIN_ERROR
        })).toEqual({...initialState, failed: true})
    })
});