import React, {useState} from 'react';

import classes from "./AddNewsButton.module.css";
import {PopUpCreateNews} from "../../components";


const AddNewsButton = (props) => {
    const {country} = props;
    const [showPopUp, setShowPopUp] = useState(false);

    const handleOnclick = () => {
        setShowPopUp(true)
    }


    return (
        <main className={`${classes.wrap} width`}>
           <button onClick={handleOnclick}>
               add news about {`${country}`}
           </button>

            {showPopUp && <PopUpCreateNews country={country} setShowPopUp={setShowPopUp}/>}
        </main>
    );
};

export {AddNewsButton};