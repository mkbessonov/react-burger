import {ETypesAction, Order} from "./types";
import {createOrder} from "../../service/order-service";
import {AppDispatch, AppThunk} from "../store";
import {clearBurger} from "./ingredients";
import {clearCount} from "./constructor-elements";

export const getOrder: AppThunk = (ingredients: string[]) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: ETypesAction.GET_ORDER
        })
        createOrder(ingredients).then((result) => {
            if (result.data.success) {
                const data = result.data;
                dispatch(setOrder(data));
                dispatch(clearBurger());
                dispatch(clearCount());
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

const setError = () => {
    return {type: ETypesAction.GET_ORDER_ERROR};
};


const setOrder = (order: Order) => {
    return {type: ETypesAction.GET_ORDER_SUCCESS, order};
};