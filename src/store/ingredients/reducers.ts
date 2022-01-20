import {IngredientsActionType, Ingredient, ETypesAction} from "./types";

export const ingredients = (state: Ingredient[] = [], action: IngredientsActionType) => {
    switch (action.type) {
        case ETypesAction.ADD: {
            const ingredient = {id: Date.now().toString(36) + Math.random().toString(36).substr(2), ...action.ingredient};
            if (state.length > 1) {
                state.splice(state.length - 1, 0, ingredient);
                return [...state];
            }
            return [...state, ingredient];
        }
        case ETypesAction.DELETE:
            return state.filter(element => element.id !== action.ingredient.id);
        case ETypesAction.SET:
            action.index !== undefined && (state[action.index] = {id: Date.now().toString(36) + Math.random().toString(36).substr(2), ...action.ingredient});
            return [...state];
        default:
            return state;
    }
};



