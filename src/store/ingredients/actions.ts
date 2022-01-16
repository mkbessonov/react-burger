import {ETypesAction, Ingredient} from "./types";

export const addIngredient = (ingredient: Ingredient) => {
    return {type: ETypesAction.ADD, ingredient};
};
export const deleteIngredient = (ingredient: Ingredient) => {
    return {type: ETypesAction.DELETE, ingredient};
};

export const setIngredient = (ingredient: Ingredient, index: number) => {
    return {type: ETypesAction.SET, ingredient, index};
};