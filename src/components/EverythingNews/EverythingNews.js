import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import classes from "./EverythingNews.module.css";
import {getEverythingNews} from "../../store/slices/everythingNews.slice";



const EverythingNews = () => {
    const {current} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEverythingNews({current}));
    }, [current]);


    return (
        <main className={`${classes.wrap} width`}>
            {current}
        </main>
    );
};

export {EverythingNews};