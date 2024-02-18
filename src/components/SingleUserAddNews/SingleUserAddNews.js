import React, {useState} from 'react';
import {IoMdClose} from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import {useDispatch} from "react-redux";

import classes from "./SingleUserAddNews.module.css";
import {addUserNewsAction} from "../../store/slices/topNewsUa.slice";
import {addUserNewsUsActions} from "../../store/slices/topNewsUs.slice";
import {addUserNewsPLActions} from "../../store/slices/topNewsPl.slice";


const SingleUserAddNews = ({obj, country}) => {
    const {id, title} = obj;
    const dispatch = useDispatch();
    const [isClassChanged, setIsClassChanged] = useState(false);

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

    const currentColor = isClassChanged ? 'yellow' : '#797594';

    const fasten = () => {
        setIsClassChanged(!isClassChanged);
        if (!isClassChanged) {
        }
    }


    return (
        <main className={`${classes.wrap} width`}>
            <section className={`${classes.blockIcon} width flex`}>
                <FaStar onClick={fasten} style={{color: currentColor}}/>
                <IoMdClose onClick={deleteNews}/>
            </section>

            <section className={`${classes.blockInfo} width`}>
                <p className={`${classes.title} width`}>{title}</p>
            </section>
        </main>
    );
};

export {SingleUserAddNews};