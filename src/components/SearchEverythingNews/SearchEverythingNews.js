import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import classes from "./SearchEverythingNews.module.css";
import {getSearchEverythingNews} from "../../store/slices/searchNewsEverything.slice";


const SearchEverythingNews = () => {
    const {page} = useSelector(store => store.searchEverythingNews);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        dispatch(getSearchEverythingNews({current: data.search, page}));
        navigate(`/search/${data.search}`);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(submit)} className={`${classes.wrap} flex`}>
            <input type="text" {...register('search')} placeholder={'write here...'}/>

            <button className={`flex`}>ok</button>
        </form>
    );
};

export {SearchEverythingNews};