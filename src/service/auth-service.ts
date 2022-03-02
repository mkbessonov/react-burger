import api from "./api";
import {getCookie} from "../utils";

export const forgotPassword = async (email: string) => {
    return await api.post(`/password-reset`, {email});
}

export const resetPassword = async (password: string, token: string) => {
    return await api.post(`/password-reset/reset`, {password, token});
}

export const register = async (email: string, password: string, name: string) => {
    return await api.post(`/auth/register`, {password, email, name});
}
export const login = async (email: string, password: string) => {
    return await api.post(`/auth/login`, {password, email});
}
export const logout = async () => {
    return await api.post(`/auth/logout`, {token: getCookie('rtoken')});
}