import {Ingredient} from "../ingredients/types";

export enum ETypesAction {
    GET_CONSTRUCTOR_ELEMENTS = "GET_CONSTRUCTOR_ELEMENTS",
    GET_CONSTRUCTOR_ELEMENTS_SUCCESS = "GET_CONSTRUCTOR_ELEMENTS_SUCCESS",
    GET_CONSTRUCTOR_ELEMENTS_ERROR = "GET_CONSTRUCTOR_ELEMENTS_ERROR",
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}

export interface ConstructorElementsActionType {
    type: ETypesAction,
    ingredients: Ingredient[],
    id?: string
}