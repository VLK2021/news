import React from 'react';

import classes from "./SingleTopNews.module.css";


const SingleTopNews = ({obj}) => {
    const {title} = obj;


    return (
        <main className={`${classes.wrap} width`}>
            {title}
        </main>
    );
};

export {SingleTopNews};