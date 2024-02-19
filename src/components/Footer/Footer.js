import React from 'react';
import classes from "./Footer.module.css";


const Footer = () => {
    const handleDownload = () => {
        window.open('https://portfolio-vlk2021.vercel.app/', '_blank');
    }

    return (
        <main className={`${classes.wrap} width flex`}>
            <button className={`${classes.btn} flex`} onClick={handleDownload}>Portfolio</button>
        </main>
    );
};

export {Footer};