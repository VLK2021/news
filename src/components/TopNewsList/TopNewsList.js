import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./TopNewsList.css";
import {getTopUa} from "../../store/slices/topNewsUa.slice";


const TopNewsList = () => {
    const dispatch = useDispatch();
    const {topNewsUa} = useSelector(store => store.topNewsUa);
    console.log(topNewsUa);


    useEffect(() => {
        dispatch(getTopUa());
    }, []);


    return (
        <main className={`${classes.wrap} width`}>
            TopNewsList
        </main>
    );
};

export {TopNewsList};