import api from "./api";

export const createOrder = async (ingredients: string[]) => {
    return await api.post(`/orders`, {ingredients});
};