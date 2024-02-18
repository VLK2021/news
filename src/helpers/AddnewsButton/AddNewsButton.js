import React from 'react';

import classes from "./AddNewsButton.module.css";


const AddNewsButton = (props) => {
    const {country} = props;


    return (
        <main className={`${classes.wrap} width`}>
           <button>
               add news about {`${country}`}
           </button>
        </main>
    );
};

export {AddNewsButton};