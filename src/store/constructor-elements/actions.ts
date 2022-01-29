import {Ingredient} from "../ingredients/types";
import {ETypesAction} from "./types";
import {getIngredients} from "../../service/ingredients-service";

export const initConstructor = () => {
    return (dispatch: any) => {
        getIngredients().then((result) => {
            if (result.data.success) {
                const data = result.data.data;
                dispatch(setIngredient(data));
            } else {
                alert('Неизвестная ошибка')
            }
        }).catch(error => {
            if (error.response) {
                alert(`Ошибка ${error.response.data} ${error.response.status} ${error.response.headers}`);
            } else if (error.request) {
                alert(`Ошибка ${error.request}`);
            } else {
                alert(`Ошибка ${error.message}`);
            }
        });
    };
};

export const setIngredient = (ingredients: Ingredient[]) => {
    return {type: ETypesAction.SET_CONSTRUCTOR_ELEMENTS, ingredients};
};

export const increment = (id: string) => {
    return {type: ETypesAction.INCREMENT, id};
};

export const decrement = (id: string) => {
    return {type: ETypesAction.DECREMENT, id};
};