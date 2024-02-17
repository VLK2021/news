import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {apiKey} from "../constants/apiKey";



const newsService = {
    getTopUA: () => axiosService
        .get(`${urls.topHeadlines}?country=ua&apiKey=${apiKey}`)
        .then(value => value.data),

    getTopUS: () => axiosService
        .get(`${urls.topHeadlines}?country=us&apiKey=${apiKey}`)
        .then(value => value.data),

    getTopPL: () => axiosService
        .get(`${urls.topHeadlines}?country=pl&apiKey=${apiKey}`)
        .then(value => value.data),

    getEverything: (current) => axiosService
        .get(`${urls.everything}?q=${current}&from=2024-01-17&sortBy=publishedAt&apiKey=${apiKey}`)
        .then(value => value.data),

}


export {
    newsService
}

