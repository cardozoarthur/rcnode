import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.redecoin.com/v2/',
});

export default instance;