import type {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, IRootState} from "../store";
import {TwsActions} from "../actions/types";

export const socketMiddleware = (wsActions: TwsActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, IRootState>) => {
        let socket: WebSocket | null = null;

        return next => (action) => {
            const {dispatch} = store;
            const {init, sendMessage, onOpen, onClose, onError, onMessage} = wsActions;
            const {type, payload, wsUrl, token} = action;
            if (type === init) {
                socket = token
                    ? new WebSocket(`${wsUrl}?token=${token}`)
                    : new WebSocket(`${wsUrl}`);
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch({type: onOpen, payload: event});
                };

                socket.onerror = event => {
                    dispatch({type: onError, payload: event});
                };

                socket.onmessage = event => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    const {success, ...restParsedData} = parsedData;
                    dispatch({type: onMessage, payload: restParsedData});
                };

                socket.onclose = event => {
                    dispatch({type: onClose, payload: event});
                };

                if (type === sendMessage) {
                    const message = token ? {...payload, token} : {...payload};
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    });
};