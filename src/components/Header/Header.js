import React from 'react';

import classes from "./Header.module.css";
import {Logo, UlHeader} from "../headerComponents";


const Header = () => {

    const handleDownload = () => {
        window.open('https://portfolio-vlk2021.vercel.app/', '_blank');
    }


    return (
        <main className={`${classes.wrap} width flex`}>
            <section className={`${classes.blockLogo}`}>
                <Logo/>
            </section>

            <section className={`${classes.blockUl}`}>
                <UlHeader/>
            </section>

            <section className={`${classes.blockLinks}`}>
                <button className={`${classes.btn} flex`} onClick={handleDownload}>Portfolio</button>
            </section>
        </main>
    );
};

export {Header};