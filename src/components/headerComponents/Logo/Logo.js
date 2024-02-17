import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import classes from "./Logo.module.css";


const Logo = () => {
    const [currentInterval, setCurrentInterval] = useState(0);
    const navigate = useNavigate();


    const colors = ['#f7f2f2', '#797594', '#6fc3c9'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentInterval(prev => (currentInterval + 1) % colors.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [colors.length, currentInterval]);

    const currentColors = colors[currentInterval];

    const goHome = () => {
        navigate('/');
    }


    return (
        <main>
            <p className={`${classes.wrap}`} style={{color: `${currentColors}`}}
               onClick={goHome}>
                World News
            </p>
        </main>
    );
};

export {Logo};