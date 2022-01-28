import {Ingredient} from "../ingredients/types";

export enum ETypesAction {
    SET_CONSTRUCTOR_ELEMENTS = "SET_CONSTRUCTOR_ELEMENTS"
}

export interface ConstructorElementsActionType {
    type: ETypesAction,
    ingredients: Ingredient[]
}