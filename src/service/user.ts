import api from "./api";
import {getCookie} from "../utils";

export const getUser = async () => {
    return await api.get(`/auth/user`, {headers: {Authorization: 'Bearer ' + getCookie('token')}});
};
export const updateUser = async (email: string, pass: string, name: string) => {
    return await api.patch(`/auth/user`, {
        user: {email, password: pass, name},
        headers: {Authorization: 'Bearer ' + getCookie('token')}
    });
};