import {ConstructorElementsActionType, ETypesAction} from "./types";
import {Ingredient} from "../ingredients/types";

export const constructorElements = (state: Ingredient[] = [], action: ConstructorElementsActionType) => {
    switch (action.type) {
        case ETypesAction.SET_CONSTRUCTOR_ELEMENTS:
            return action.ingredients;
        default:
            return state;
    }
};
