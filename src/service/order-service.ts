import api from "./api";
import {getCookie} from "../utils";

export const createOrder = async (ingredients: string[]) => {
    return await api.post(`/orders`, {ingredients}, {headers: {Authorization: 'Bearer ' + getCookie('token')}});
};