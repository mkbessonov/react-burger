import {ETypesAction, OrderDetailsActionType} from "./types";

export const orderDetails = (state: any = {}, action: OrderDetailsActionType) => {
    switch (action.type) {
        case ETypesAction.SET_ORDER:
            return action.order;
        default:
            return state;
    }
};
