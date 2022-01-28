import {Ingredient} from "../ingredients/types";

export enum ETypesAction {
    SET_INGREDIENT_INFO = "SET_INGREDIENT_INFO",
    CLEAR_INGREDIENT_INFO = "CLEAR_INGREDIENT_INFO"
}

export interface IngredientInfoActionType {
    type: ETypesAction,
    ingredient?: Ingredient
}