import React from 'react';
import {Outlet} from 'react-router-dom';
import { Suspense } from 'react';

import classes from "./Layout.module.css";
import {Footer, Header, Spinner} from "../components";


const Layout = () => {



    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockHeader} width`}>
                <Header/>
            </section>

            <section className={`${classes.blockOutlet} width`}>
                <Suspense fallback={<Spinner/>}>
                    <Outlet/>
                </Suspense>
            </section>

            <section className={`${classes.blockFooter} width`}>
                <Footer/>
            </section>
        </main>
    );
};

export {Layout};