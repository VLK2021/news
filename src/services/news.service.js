import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


const newsService = {
    getTopUA: () => axiosService
        .get(`${urls.topHeadlines}?country=ua`)
        .then(value => value.data),

    getTopUS: () => axiosService
        .get(`${urls.topHeadlines}?country=us`)
        .then(value => value.data),

    getTopPL: () => axiosService
        .get(`${urls.topHeadlines}?country=pl`)
        .then(value => value.data),

    getEverything: (current, page) => axiosService
        .get(`${urls.everything}?q=${current}&pageSize=10&page=${page}`)
        .then(value => value.data),

    getSearchEverything: (current, page) => axiosService
        .get(`${urls.everything}?q=${current}&pageSize=30&page=${page}`)
        .then(value => value.data),

}

export {
    newsService
}


