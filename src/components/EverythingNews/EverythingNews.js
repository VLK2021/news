import React, {useCallback, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {v4} from 'uuid';

import classes from "./EverythingNews.module.css";
import {everythingNewsActions, getEverythingNews, getNewsMore} from "../../store/slices/everythingNews.slice";
import {EverythingSingleNews} from "../EverythingSingleNews/EverythingSingleNews";


const EverythingNews = () => {
    const {everythingNews, page} = useSelector(store => store.everythingNews);
    const {current} = useParams();
    const dispatch = useDispatch();

    let p = page;

    useEffect(() => {
        dispatch(getEverythingNews({current, page}));
    }, [current]);

    const addMoreHandler = useCallback(() => {
        dispatch(getNewsMore({current, page: p + 1}));
        dispatch(everythingNewsActions.changePage(p + 1));
    }, [page]);


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockNews} width`}>
                {everythingNews && everythingNews.map(obj => <EverythingSingleNews key={v4()} obj={obj}/>)}
            </section>

            <section className={`${classes.blockBtn} width flex`}>
                <button onClick={addMoreHandler}>add next 10 news</button>
            </section>
        </main>
    );
};

export {EverythingNews};