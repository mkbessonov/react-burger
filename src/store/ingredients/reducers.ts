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
        case ETypesAction.MOVE: {
            action.index !== undefined && (state[action.index].index = action.newIndex);
            action.index  !== undefined && action.newIndex !== undefined && state.splice(action.index, 0, state.splice(action.newIndex, 1)[0]);
            return [...state];
        }
        default:
            return state;
    }
};



