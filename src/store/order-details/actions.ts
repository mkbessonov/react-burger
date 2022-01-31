import {ETypesAction, Order} from "./types";
import {createOrder} from "../../service/order-service";

export const getOrder = (ingredients: string[]) => {
    return (dispatch: any) => {
        dispatch({
            type: ETypesAction.GET_ORDER
        })
        createOrder(ingredients).then((result) => {
            if (result.data.success) {
                const data = result.data;
                dispatch(setOrder(data));
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