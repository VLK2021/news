import axios from "axios";

import baseURL from "../constants/baseURL";


const axiosService = axios.create({
    baseURL
});

export {
    axiosService
}
