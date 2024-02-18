import React from 'react';

import classes from "./UserNews.module.css";
import {SingleUserAddNews} from "../SingleUserAddNews/SingleUserAddNews";


const UserNews = ({country, data}) => {


    return (
        <main className={`${classes.wrap} width`}>
            <p className={`flex`}>User News {country}</p>

            <section className={`width`}>
                {data && data.map(obj => <SingleUserAddNews key={obj.id} obj={obj} country={country}/>)}
            </section>
        </main>
    );
};

export {UserNews};

