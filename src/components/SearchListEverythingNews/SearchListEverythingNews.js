import React from 'react';

import classes from "./SearchListEverythingNews.module.css";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const SearchListEverythingNews = () => {
    const {searchEverythingNews} = useSelector(store => store.searchEverythingNews);
    console.log(searchEverythingNews);
    const params = useParams();


    return (
        <main className={`${classes.wrap}`}>

        </main>
    );
};

export {SearchListEverythingNews};