import {ETypesAction} from "./types";

export const setOrder = (order: any) => {
    return {type: ETypesAction.SET_ORDER, order};
};