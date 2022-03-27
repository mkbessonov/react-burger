import {ETypesAction} from "./types";
import {WS_URL} from "../../service/api";

export const socketStart = () =>{
    return {type: ETypesAction.WS_CONNECTION_START, wsUrl: WS_URL};
}
export const socketClose = () =>{
    return {type: ETypesAction.WS_CONNECTION_CLOSED};
}