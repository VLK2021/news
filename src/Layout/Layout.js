import React from 'react';
import {Outlet} from 'react-router-dom';

import classes from "./Layout.module.css";
import {Footer, Header} from "../components";


const Layout = () => {



    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockHeader} width`}>
                <Header/>
            </section>

            <section className={`${classes.blockOutlet} width`}>
                <Outlet/>
            </section>

            <section className={`${classes.blockFooter} width`}>
                <Footer/>
            </section>
        </main>
    );
};

export {Layout};