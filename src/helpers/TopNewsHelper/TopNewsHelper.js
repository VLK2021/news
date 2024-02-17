import React from 'react';
import {v4} from 'uuid';

import classes from "./TopNewsHelper.module.css";
import {SingleTopNews} from "../../components";


const TopNewsHelper = (props) => {
    const {country, data} = props;


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <p>{country}</p>
            <section className={`width`}>
                {data && data.map(obj => (
                    <SingleTopNews obj={obj} key={v4()}/>
                ))}
            </section>
        </main>
    );
};

export {TopNewsHelper};