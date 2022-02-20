import {ETypesAction, Ingredient} from "./types";

export const addIngredient = (ingredient: Ingredient) => {
    const newIngredient = {id: Date.now().toString(36) + Math.random().toString(36).substr(2), ...ingredient};
    return {type: ETypesAction.ADD_INGREDIENT, ingredient: newIngredient};
};
export const deleteIngredient = (ingredient: Ingredient) => {
    return {type: ETypesAction.DELETE_INGREDIENT, ingredient};
};

export const setIngredient = (ingredient: Ingredient, index: number) => {
    const newIngredient = {id: Date.now().toString(36) + Math.random().toString(36).substr(2), ...ingredient};
    return {type: ETypesAction.SET_INGREDIENT, ingredient: newIngredient, index};
};
export const moveIngredient = (index: number, newIndex: number) => {
    return {type: ETypesAction.MOVE_INGREDIENT, index, newIndex};
};