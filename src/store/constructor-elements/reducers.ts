import {ConstructorElementsActionType, ETypesAction} from "./types";
import {Ingredient} from "../ingredients/types";

export interface IConstructorElements {
    ingredients: Ingredient[],
    feedFailed: boolean,
    feedRequest: boolean
}

export const constructorElements = (state: IConstructorElements = {
    ingredients: [],
    feedFailed: false,
    feedRequest: false
}, action: ConstructorElementsActionType) => {
    switch (action.type) {
        case ETypesAction.GET_CONSTRUCTOR_ELEMENTS:
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            };
        case ETypesAction.GET_CONSTRUCTOR_ELEMENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients,
                feedRequest: false
            };
        }
        case ETypesAction.GET_CONSTRUCTOR_ELEMENTS_ERROR: {
            return {
                ...state,
                feedFailed: true,
                feedRequest: false
            };
        }
        case ETypesAction.INCREMENT: {
            if (action.id !== undefined) {
                let elem = state.ingredients.find(elem => elem._id === action.id);
                if (elem) {
                    elem.count === undefined ? (elem.count = 1) : (elem.count++);
                }
            }
            return {
                ...state, ingredients: JSON.parse(JSON.stringify(state.ingredients))
            };
        }
        case ETypesAction.DECREMENT: {
            if (action.id !== undefined) {
                let elem = state.ingredients.find(elem => elem._id === action.id);
                if (elem) {
                    elem.count === 1 ? (elem.count = undefined) : (elem.count && elem.count--);
                }
            }
            return {
                ...state, ingredients: JSON.parse(JSON.stringify(state.ingredients))
            };
        }
        default:
            return state;
    }
};
