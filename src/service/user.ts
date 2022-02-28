import api from "./api";
import {getCookie} from "../utils";
import {User} from "../store/actions/types";

export const getUser = async () => {
    return await api.get(`/auth/user`, {headers: {Authorization: 'Bearer ' + getCookie('token')}});
};
export const updateUser = async (user: User) => {
    return await api.patch(`/auth/user`, {user, headers: {Authorization: 'Bearer ' + getCookie('token')}});
};