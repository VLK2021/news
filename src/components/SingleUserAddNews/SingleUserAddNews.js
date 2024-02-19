import React, {useState} from 'react';
import {IoMdClose} from "react-icons/io";
import {FaStar} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";

import classes from "./SingleUserAddNews.module.css";
import {addUserNewsAction} from "../../store/slices/topNewsUa.slice";
import {addUserNewsUsActions} from "../../store/slices/topNewsUs.slice";
import {addUserNewsPLActions} from "../../store/slices/topNewsPl.slice";
import {fastenHelper} from "../../helpers/fastenHelper/fastenHelper";


const SingleUserAddNews = ({obj, country}) => {
    const {userNewsUa, isFastenUa} = useSelector(store => store.topNewsUa);
    const {userNewsUs, isFastenUs} = useSelector(store => store.topNewsUs);
    const {userNewsPL, isFastenPL} = useSelector(store => store.topNewsPl);
    const [isClassChanged, setIsClassChanged] = useState(false);
    const dispatch = useDispatch();
    const {id, title} = obj;

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
        if (country === 'Ukraine') {
            fastenHelper(id, currentColor, country, isFastenUa, userNewsUa, dispatch);
        } else if (country === 'USA') {
            fastenHelper(id, currentColor, country, isFastenUs, userNewsUs, dispatch);
        } else if (country === 'Polish') {
            fastenHelper(id, currentColor, country, isFastenPL, userNewsPL, dispatch);
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