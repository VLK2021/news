import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./TopNewsList.module.css";
import {getTopUa} from "../../store/slices/topNewsUa.slice";
import {getTopUs} from "../../store/slices/topNewsUs.slice";
import {getTopPl} from "../../store/slices/topNewsPl.slice";
import {TopNewsHelper} from "../../helpers";
import {UserNews} from "../UserNews/UserNews";
import {AddNewsButton} from "../../helpers/AddnewsButton/AddNewsButton";


const TopNewsList = () => {
    const dispatch = useDispatch();
    const {topNewsUa, userNewsUa} = useSelector(store => store.topNewsUa);
    const {topNewsUs, userNewsUs} = useSelector(store => store.topNewsUs);
    const {topNewsPl, userNewsPL} = useSelector(store => store.topNewsPl);

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
                    {<UserNews country={'Ukraine'}/>}
                    <AddNewsButton country={'Ukraine'}/>
                </article>

                <article className={`${classes.blockUs}`}>
                    <TopNewsHelper country={'USA'} data={topNewsUs}/>
                    {<UserNews country={'USA'}/>}
                    <AddNewsButton country={'USA'}/>
                </article>

                <article className={`${classes.blockPl}`}>
                    <TopNewsHelper country={'Polish'} data={topNewsPl}/>
                    {<UserNews country={'Polish'}/>}
                    <AddNewsButton country={'Polish'}/>
                </article>
            </section>
        </main>
    );
};

export {TopNewsList};