import React from 'react';
import {IoMdClose} from "react-icons/io";

import classes from "./PopUpCreateNews.module.css";
import {AddNewsForm} from "../AddNewsForm/AddNewsForm";


const PopUpCreateNews = ({country, setShowPopUp}) => {


    return (
        <main className={`${classes.wrap}`}>
            <section className={`${classes.blockClose} width flex`}>
                <IoMdClose onClick={() => setShowPopUp(false)}/>
            </section>

            <section className={`${classes.blockTitle} flex`}>
                <p>Create news about {country}</p>
            </section>

            <section className={`${classes.blockForm}`}>
                <AddNewsForm country={country} setShowPopUp={setShowPopUp}/>
            </section>
        </main>
    );
};

export {PopUpCreateNews};