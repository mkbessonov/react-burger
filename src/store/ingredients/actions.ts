import {ETypesAction, Ingredient} from "./types";

export const addIngredient = (ingredient: Ingredient) => {
    const newIngredient = {id: Date.now().toString(36) + Math.random().toString(36).substr(2), ...ingredient};
    return {type: ETypesAction.ADD, ingredient: newIngredient};
};
export const deleteIngredient = (ingredient: Ingredient) => {
    return {type: ETypesAction.DELETE, ingredient};
};

export const setIngredient = (ingredient: Ingredient, index: number) => {
    const newIngredient = {id: Date.now().toString(36) + Math.random().toString(36).substr(2), ...ingredient};
    return {type: ETypesAction.SET, ingredient: newIngredient, index};
};
export const moveIngredient = (index: number, newIndex: number) => {
    return {type: ETypesAction.MOVE, index, newIndex};
};