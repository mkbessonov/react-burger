import axios from "axios";

const URL = 'https://norma.nomoreparties.space/';
let instance = axios.create({
    baseURL: URL
});
export default instance;