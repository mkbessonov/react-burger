import axios from "axios";
import {getCookie, setCookie} from "../utils";
export const WS_URL: string = "wss://norma.nomoreparties.space/orders/all";
export const WS_USER_URL: string = "wss://norma.nomoreparties.space/orders";
const URL = 'https://norma.nomoreparties.space/api/';
let instance = axios.create({
    baseURL: URL
});
instance.interceptors.response.use((response) => {
        return response
    },
    function (error) {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            return instance.post('/auth/token',
                {
                    token: getCookie('rtoken')
                })
                .then(res => {
                    if (res.data.success) {
                        setCookie('rtoken', res.data.refreshToken);
                        setCookie('token', res.data.accessToken.split('Bearer ')[1]);
                        instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
                        return axios(originalRequest);
                    } else {
                        if (window.location.href.indexOf('/login') === -1) {
                            window.location.href = '/login';
                        }
                    }
                }).catch((e) => {
                    console.error(e)
                })
        }
        return Promise.reject(error);
    });
export default instance;