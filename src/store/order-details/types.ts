export enum ETypesAction {
    SET_ORDER = "SET_ORDER"
}

export interface OrderDetailsActionType {
    type: ETypesAction,
    order: any
}