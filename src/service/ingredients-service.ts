import api from "./api";

export const getIngredients = async () => {
    return await api.get(`/api/ingredients`);
};