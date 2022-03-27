import {ETypesAction} from "../actions/types";

export type TWSState = {
    wsConnected: boolean;
    feeds: any;
    userFeeds: any;
    error?: Event;
}

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

export const wsReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case ETypesAction.WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: null,
                wsConnected: true
            };

        case ETypesAction.WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };

        case ETypesAction.WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: null,
                wsConnected: false
            };

        case ETypesAction.WS_GET_ALL_FEEDS:
            return {
                ...state,
                error: null,
                feeds: action.payload,
            };
        case ETypesAction.WS_GET_USER_FEEDS:
            return {
                ...state,
                error: null,
                userFeeds: action.payload,
            };
        default:
            return state;
    }
};