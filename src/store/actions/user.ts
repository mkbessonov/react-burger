import {ETypesAction, User} from "./types";
import {login} from "../../service/auth-service";
import {setCookie} from "../../utils";

export const signInAction = (email: string, pass: string, cb: () => void) => {
    return (dispatch: any) => {
        dispatch({
            type: ETypesAction.LOGIN
        })
        login(email, pass)
            .then((result) => {
                setCookie('token', result.data.accessToken.split('Bearer ')[1]);
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

export const setUser = (user: User) => {
    return {type: ETypesAction.LOGIN_SUCCESS, user};
};
const setError = () => {
    return {type: ETypesAction.LOGIN_ERROR};
};