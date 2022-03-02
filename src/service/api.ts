import axios from "axios";
import {getCookie} from "../utils";

const URL = 'https://norma.nomoreparties.space/api/';
let instance = axios.create({
    baseURL: URL
});
instance.interceptors.response.use(undefined, (error) => {
    if (error.response.status === 403) {
        instance.post('/auth/token', {token: getCookie('rtoken')}).then((res) => {
            return new Promise(() => { });
        })
    } else {
        return Promise.reject(error)
    }
})
export default instance;