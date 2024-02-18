import React, {useCallback} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {v4} from 'uuid';

import classes from "./SearchListEverythingNews.module.css";
import {EverythingSingleNews} from "../EverythingSingleNews/EverythingSingleNews";
import {getSearchNewsMore, searchEverythingNewsActions} from "../../store/slices/searchNewsEverything.slice";


const SearchListEverythingNews = () => {
    const {searchEverythingNews, page} = useSelector(store => store.searchEverythingNews);
    const params = useParams();
    const dispatch = useDispatch();

    let p = page;

    const addMoreSearchHandler = useCallback(() => {
        dispatch(getSearchNewsMore({current: params.current, page: p + 1}));
        dispatch(searchEverythingNewsActions.changeSearchPage(p + 1));
    }, [page])


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockSearchNews} width`}>
                {searchEverythingNews && searchEverythingNews.map(obj => <EverythingSingleNews key={v4()} obj={obj}/>)}
            </section>

            <section className={`${classes.blockSearchBtn} width flex`}>
                <button onClick={addMoreSearchHandler}>add next news</button>
            </section>
        </main>
    );
};

export {SearchListEverythingNews};