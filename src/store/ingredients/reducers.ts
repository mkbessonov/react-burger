import {IngredientsActionType, Ingredient, ETypesAction} from "./types";

export const ingredients = (state: Ingredient[] = [], action: IngredientsActionType) => {
    switch (action.type) {
        case ETypesAction.ADD: {
            if (state.length > 1) {
                state.splice(state.length - 1, 0, action.ingredient);
                return [...state];
            }
            return [...state, action.ingredient];
        }
        case ETypesAction.DELETE:
            return state.filter(element => element.id !== action.ingredient.id);
        case ETypesAction.SET:
            action.index !== undefined && (state[action.index] = action.ingredient);
            return [...state];
        default:
            return state;
    }
};



