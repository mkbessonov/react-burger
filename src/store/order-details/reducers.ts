import {ETypesAction, Order, OrderDetailsActionType} from "./types";

export const orderDetails = (state: Order = {
    failed: false,
    request: false
}, action: OrderDetailsActionType) => {
    switch (action.type) {
        case ETypesAction.GET_ORDER:
            return {
                ...state,
                request: true,
                failed: false,
            };
        case ETypesAction.GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderDetails: action.order,
                request: false
            };
        }
        case ETypesAction.GET_ORDER_ERROR: {
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
