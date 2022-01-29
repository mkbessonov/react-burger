import {ConstructorElementsActionType, ETypesAction} from "./types";
import {Ingredient} from "../ingredients/types";

export const constructorElements = (state: Ingredient[] = [], action: ConstructorElementsActionType) => {
    switch (action.type) {
        case ETypesAction.SET_CONSTRUCTOR_ELEMENTS:
            return action.ingredients;
        case ETypesAction.INCREMENT: {
            if (action.id !== undefined) {
                let elem = state.find(elem => elem._id === action.id);
                if (elem) {
                    elem.count === undefined ? (elem.count = 1) : (elem.count++);
                }
            }
            return JSON.parse(JSON.stringify(state));
        }
        case ETypesAction.DECREMENT: {
            if (action.id !== undefined) {
                let elem = state.find(elem => elem._id === action.id);
                if (elem) {
                    elem.count === 1 ? (elem.count = undefined) : (elem.count && elem.count--);
                }
            }
            return JSON.parse(JSON.stringify(state));
        }
        default:
            return state;
    }
};
