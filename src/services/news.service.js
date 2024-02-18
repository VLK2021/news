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

    getEverything: (current, page) => axiosService
        .get(`${urls.everything}?q=${current}&apiKey=${apiKey}&pageSize=10&page=${page}`)
        .then(value => value.data),

    getSearchEverything: (current, page) => axiosService
        .get(`${urls.everything}?q=${current}&apiKey=${apiKey}&pageSize=10&page=${page}`)
        .then(value => value.data),

}


export {
    newsService
}


