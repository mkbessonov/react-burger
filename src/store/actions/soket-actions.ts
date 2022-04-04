import {ETypesAction} from "./types";
import {WS_URL, WS_USER_URL} from "../../service/api";
import {getCookie} from "../../utils";

export const socketStartForAll = () => {
    return {type: ETypesAction.WS_CONNECTION_START, wsUrl: WS_URL};
};
export const socketCloseForAll = () => {
    return {type: ETypesAction.WS_CONNECTION_CLOSED};
};
export const socketStartForUser = () => {
    return {type: ETypesAction.WS_CONNECTION_START_USER, wsUrl: WS_USER_URL, token: getCookie('token')};
};
export const socketCloseForUser = () => {
    return {type: ETypesAction.WS_CONNECTION_CLOSED_USER};
};