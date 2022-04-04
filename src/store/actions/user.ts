import {ETypesAction, User} from "./types";
import {login, logout} from "../../service/auth-service";
import {setCookie} from "../../utils";
import {AppDispatch, AppThunk} from "../store";

export const signInAction: AppThunk = (email: string, pass: string, cb: () => void) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: ETypesAction.LOGIN
        })
        login(email, pass)
            .then((result) => {
                setCookie('token', result.data.accessToken.split('Bearer ')[1]);
                setCookie('rtoken', result.data.refreshToken);
                if (result.data.success) {
                    const data = result.data.user;
                    dispatch(setUser(data));
                    cb();
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

export const signOutAction: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: ETypesAction.LOGIN
        })
        logout()
            .then((result) => {
                document.cookie = 'token=undefined; rtoken=undefined';
                if (result.data.success) {
                    dispatch(setUser(undefined));
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
export const setUser = (user: User | undefined) => {
    return {type: ETypesAction.LOGIN_SUCCESS, user};
};
const setError = () => {
    return {type: ETypesAction.LOGIN_ERROR};
};