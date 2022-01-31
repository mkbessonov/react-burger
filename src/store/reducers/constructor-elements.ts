import {ConstructorElementsActionType, ETypesAction, Ingredient} from "../actions/types";

export interface IConstructorElements {
    ingredients: Ingredient[],
    failed: boolean,
    request: boolean
}

export const constructorElements = (state: IConstructorElements = {
    ingredients: [],
    failed: false,
    request: false
}, action: ConstructorElementsActionType) => {
    switch (action.type) {
        case ETypesAction.GET_CONSTRUCTOR_ELEMENTS:
            return {
                ...state,
                request: true,
                failed: false,
            };
        case ETypesAction.GET_CONSTRUCTOR_ELEMENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients,
                request: false
            };
        }
        case ETypesAction.GET_CONSTRUCTOR_ELEMENTS_ERROR: {
            return {
                ...state,
                failed: true,
                request: false
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
