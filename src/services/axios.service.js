import axios from "axios";

import baseURL from "../constants/baseURL";
import {apiKey} from "../constants/apiKey";


// const axiosService = axios.create({
//     baseURL
// });

const axiosService = axios.create({
    baseURL,
    headers: {
        'X-Api-Key': apiKey
    }
});

export {
    axiosService
}
