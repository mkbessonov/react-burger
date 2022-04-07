import {ETypesAction} from "../actions/types";
import {TWSState, wsReducer} from "./ws-reducer";

export const initialState: TWSState = {
    wsConnected: false,
    feeds: {
        orders: [],
        total: 0,
        totalToday: 0
    },
    userFeeds: {
        orders: [],
        total: 0,
        totalToday: 0
    }
};
const feeds = {
    orders: [{
        createdAt: "2022-04-04",
        name: "Spicy флюоресцентный space бургер",
        ingredients: ['1'],
        number: 1,
        status: "done",
        updatedAt: "2022-04-04",
        _id: "1",
    }, {
        createdAt: "2022-04-04",
        ingredients: ["2"],
        name: "Люминесцентный бургер",
        number: 2,
        status: "done",
        updatedAt: "2022-04-04",
        _id: "2",
    }], total: 2, totalToday: 2,
}

describe('wsReducer reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(wsReducer(undefined, {type: null})).toEqual(initialState)
    })
    it('WS_CONNECTION_SUCCESS', () => {
        expect(wsReducer(undefined, {
            type: ETypesAction.WS_CONNECTION_SUCCESS,
        })).toEqual({...initialState, error: null, wsConnected: true})
    })
    it('WS_CONNECTION_ERROR', () => {
        expect(wsReducer(undefined, {
            type: ETypesAction.WS_CONNECTION_ERROR,
            payload: 'error'
        })).toEqual({...initialState, error: 'error', wsConnected: false})
    })
    it('WS_CONNECTION_CLOSED', () => {
        expect(wsReducer(undefined, {
            type: ETypesAction.WS_CONNECTION_CLOSED
        })).toEqual({...initialState, error: null, wsConnected: false})
    })
    it('WS_GET_ALL_FEEDS', () => {
        expect(wsReducer(undefined, {
            type: ETypesAction.WS_GET_ALL_FEEDS,
            payload: feeds
        })).toEqual({...initialState,  error: null, feeds: feeds})
    })
    it('WS_GET_USER_FEEDS', () => {
        expect(wsReducer(undefined, {
            type: ETypesAction.WS_GET_USER_FEEDS,
            payload: feeds
        })).toEqual({...initialState,  error: null, userFeeds: feeds})
    })
});