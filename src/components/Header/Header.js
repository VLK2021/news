import React from 'react';
import {IoMenu} from "react-icons/io5";

import classes from "./Header.module.css";
import {Logo, UlHeader} from "../headerComponents";
import {SearchEverythingNews} from "../SearchEverythingNews/SearchEverythingNews";


const Header = () => {


    return (
        <main className={`${classes.wrap} width flex`}>
            <section className={`${classes.blockLogo}`}>
                <Logo/>
            </section>

            <section className={`${classes.menuIcon} flex`}>
                <IoMenu/>
            </section>

            <section className={`${classes.blockUl}`}>
                <UlHeader/>
            </section>

            <section className={`${classes.blockSearch}`}>
                <SearchEverythingNews/>
            </section>
        </main>
    );
};

export {Header};