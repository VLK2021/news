import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./TopNewsList.module.css";
import {getTopUa} from "../../store/slices/topNewsUa.slice";
import {getTopUs} from "../../store/slices/topNewsUs.slice";
import {getTopPl} from "../../store/slices/topNewsPl.slice";
import {TopNewsHelper} from "../../helpers";


const TopNewsList = () => {
    const dispatch = useDispatch();
    const {topNewsUa} = useSelector(store => store.topNewsUa);
    const {topNewsUs} = useSelector(store => store.topNewsUs);
    const {topNewsPl} = useSelector(store => store.topNewsPl);

    useEffect(() => {
        dispatch(getTopUa());
        dispatch(getTopUs());
        dispatch(getTopPl());
    }, []);


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h1>Top country news</h1>

            <section className={`${classes.blockNews}  width`}>
                <article className={`${classes.blockUa}`}>
                    <TopNewsHelper country={'Ukraine'} data={topNewsUa}/>
                </article>

                <article className={`${classes.blockUs}`}>
                    <TopNewsHelper country={'USA'} data={topNewsUs}/>
                </article>

                <article className={`${classes.blockPl}`}>
                    <TopNewsHelper country={'Polish'} data={topNewsPl}/>
                </article>
            </section>
        </main>
    );
};

export {TopNewsList};