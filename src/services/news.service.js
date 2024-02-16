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

}

export {
    newsService
}

//https://newsapi.org/v2/top-headlines?country=ua&apiKey=b4d0ac35ee9444868db03f8f369feec1
//https://newsapi.org/v2/top-headlines?country=us&apiKey=b4d0ac35ee9444868db03f8f369feec1