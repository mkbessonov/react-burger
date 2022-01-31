import {Ingredient} from "../ingredients/types";
import {ETypesAction} from "./types";
import {getIngredients} from "../../service/ingredients-service";

export const initConstructor = () => {
    return (dispatch: any) => {
        dispatch({
            type: ETypesAction.GET_CONSTRUCTOR_ELEMENTS
        })
        getIngredients().then((result) => {
            if (result.data.success) {
                const data = result.data.data;
                dispatch(setIngredients(data));
            } else {
                dispatch(setError());
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
            dispatch(setError());
        });
    };
};

const setIngredients = (ingredients: Ingredient[]) => {
    return {type: ETypesAction.GET_CONSTRUCTOR_ELEMENTS_SUCCESS, ingredients};
};
const setError = () => {
    return {type: ETypesAction.GET_CONSTRUCTOR_ELEMENTS_ERROR};
};

export const increment = (id: string) => {
    return {type: ETypesAction.INCREMENT, id};
};

export const decrement = (id: string) => {
    return {type: ETypesAction.DECREMENT, id};
};