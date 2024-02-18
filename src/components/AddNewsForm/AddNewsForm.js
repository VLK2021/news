import React from 'react';
import {v4} from 'uuid';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import classes from "./AddNewsForm.module.css";
import {addUserNewsAction} from "../../store/slices/topNewsUa.slice";
import {addUserNewsUsActions} from "../../store/slices/topNewsUs.slice";
import {addUserNewsPLActions} from "../../store/slices/topNewsPl.slice";


const AddNewsForm = ({country, setShowPopUp}) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();


    const submit = (data) => {
        const news = {
            id: v4(),
            title: data.title,
        }

        if (country === 'Ukraine') {
            dispatch(addUserNewsAction.addUserNews(news));
        }
        if (country === 'USA') {
            dispatch(addUserNewsUsActions.AddUserNewsUs(news));
        }
        if (country === 'Polish') {
            dispatch(addUserNewsPLActions.addUserNewsPL(news));
        }

        reset();
        setShowPopUp(false);
    }


    return (
        <form onSubmit={handleSubmit(submit)} className={`${classes.wrap} width`}>
            <article className={`${classes.inputBlock} width`}>
                <label className={`flex`}>Title:</label><br/>
                <input type="text" placeholder={'Enter title...'} {...register('title')}/>
            </article>


            <button className={`${classes.btnPopUpAddNews} flex`}>add news</button>
        </form>
    );
};

export {AddNewsForm};