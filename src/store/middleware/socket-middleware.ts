import type {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, IRootState} from "../store";
import {ETypesAction} from "../actions/types";

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, IRootState>) => {
        let socket: WebSocket | null = null;

        return next => (action) => {
            const { dispatch } = store;
            const { type, payload, wsUrl, token } = action;
            if (type === ETypesAction.WS_CONNECTION_START) {
                socket = token
                    ? new WebSocket(`${wsUrl}?token=${token}`)
                    : new WebSocket(`${wsUrl}`);
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch({ type: ETypesAction.WS_CONNECTION_SUCCESS, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: ETypesAction.WS_CONNECTION_ERROR, payload: event });
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;
                    dispatch({ type: ETypesAction.WS_GET_ALL_FEEDS, payload: restParsedData });
                };

                socket.onclose = event => {
                    dispatch({ type: ETypesAction.WS_CONNECTION_CLOSED, payload: event });
                };

                if (type === ETypesAction.WS_SEND_MESSAGE) {
                    const message = token ? { ...payload, token } : { ...payload };
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    });
};