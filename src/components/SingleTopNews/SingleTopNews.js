import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from "./SingleTopNews.module.css";


const SingleTopNews = ({obj}) => {
    const {title, publishedAt} = obj;


    return (
        <main className={`${classes.wrap} width`}>
            <NavLink to={publishedAt.toString()}>
                {title}
            </NavLink>
        </main>
    );
};

export {SingleTopNews};