import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { v4 } from 'uuid';

import classes from "./TopNewsList.module.css";
import {getTopUa} from "../../store/slices/topNewsUa.slice";
import {getTopUs} from "../../store/slices/topNewsUs.slice";
import {getTopPl} from "../../store/slices/topNewsPl.slice";
import {SingleTopNews} from "../SingleTopNews/SingleTopNews";


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
            <h1>Top News</h1>

            <section className={`${classes.blockNews}  width`}>
                <article className={`${classes.blockUa}`}>
                    {topNewsUa && topNewsUa.map(obj => (
                        <SingleTopNews obj={obj} key={v4()}/>
                    ))}
                </article>

                <article className={`${classes.blockUs}`}>
                    {topNewsUs && topNewsUs.map(obj => (
                        <SingleTopNews obj={obj} key={v4()}/>
                    ))}
                </article>

                <article className={`${classes.blockPl}`}>
                    {topNewsPl && topNewsPl.map(obj => (
                        <SingleTopNews obj={obj} key={v4()}/>
                    ))}
                </article>
            </section>
        </main>
    );
};

export {TopNewsList};