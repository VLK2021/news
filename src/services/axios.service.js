import axios from "axios";

import baseURL from "../constants/baseURL";
import {apiKey} from "../constants/apiKey";


// const axiosService = axios.create({
//     baseURL
// });

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'b4d0ac35ee9444868db03f8f369feec1'
    },
    withCredentials: true
});

export {
    axiosService
}
