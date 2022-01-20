import axios from "axios";

const URL = 'https://norma.nomoreparties.space/api/';
let instance = axios.create({
    baseURL: URL
});
export default instance;