export enum ETypesAction {
    GET_ORDER = "GET_ORDER",
    GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS",
    GET_ORDER_ERROR = "GET_ORDER_ERROR"
}

export interface OrderDetailsActionType {
    type: ETypesAction,
    order: Order
}

export interface Order {
    orderDetails?: {
        name: string,
        order: {
            number: number
        }
    },
    failed: boolean,
    request: boolean
}
