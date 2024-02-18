import React from 'react';

import classes from "./EverythingSingleNews.module.css";


const EverythingSingleNews = ({obj}) => {
const {author, title, description, url, urlToImage, publishedAt, content} = obj;

    return (
        <main className={`${classes.wrap} flex-direction`}>
            <article className={`${classes.blockImg}`}>
                <img src={urlToImage} alt="img"/>
            </article>

            <article className={`${classes.blockAuthor} width flex`}>
                <p>{author}</p>
            </article>

            <article className={`${classes.blockTitle} width flex`}>
                <p>{title}</p>
            </article>
        </main>
    );
};

export {EverythingSingleNews};