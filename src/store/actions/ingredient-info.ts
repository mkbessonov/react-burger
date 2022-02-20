import {Ingredient} from "./types";
import {ETypesAction} from "./types";

export const setIngredientInfo = (ingredient: Ingredient) => {
    return {type: ETypesAction.SET_INGREDIENT_INFO, ingredient};
};
export const clearIngredientInfo = () => {
    return {type: ETypesAction.CLEAR_INGREDIENT_INFO};
};