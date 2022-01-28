import {ETypesAction, IngredientInfoActionType} from "./types";
import {Ingredient} from "../ingredients/types";

export const ingredientInfo = (state: Ingredient | null = null, action: IngredientInfoActionType) => {
    switch (action.type) {
        case ETypesAction.SET_INGREDIENT_INFO:
            return action.ingredient;
        case ETypesAction.CLEAR_INGREDIENT_INFO:
            return null;
        default:
            return state;
    }
};
