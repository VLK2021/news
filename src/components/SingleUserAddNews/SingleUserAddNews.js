import React from 'react';
import {IoMdClose} from "react-icons/io";
import {useDispatch} from "react-redux";

import classes from "./SingleUserAddNews.module.css";
import {addUserNewsAction} from "../../store/slices/topNewsUa.slice";
import {addUserNewsUsActions} from "../../store/slices/topNewsUs.slice";
import {addUserNewsPLActions} from "../../store/slices/topNewsPl.slice";


const SingleUserAddNews = ({obj, country}) => {
    const {id, title} = obj;
    const dispatch = useDispatch();

    const deleteNews = () => {
        if (country === 'Ukraine') {
            dispatch(addUserNewsAction.deleteNewsUa(id));
        }
        if (country === 'USA') {
            dispatch(addUserNewsUsActions.deleteNewsUs(id));
        }
        if (country === 'Polish') {
            dispatch(addUserNewsPLActions.deleteNewsPL(id))
        }
    };


    return (
        <main className={`${classes.wrap} width`}>
            <section className={`${classes.blockIcon} width flex`}>
                <IoMdClose onClick={deleteNews}/>
            </section>

            <section className={`${classes.blockInfo} width`}>
                <p className={`${classes.title} width`}>{title}</p>
            </section>
        </main>
    );
};

export {SingleUserAddNews};