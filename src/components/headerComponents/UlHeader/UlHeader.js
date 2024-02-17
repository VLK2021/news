import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from "./UlHeader.module.css";


const UlHeader = () => {
    return (
        <main>
            <ul className={`${classes.ul} flex`}>
                <NavLink to={`/Ukraine`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{'Ukraine'}</li>
                </NavLink>

                <NavLink to={`/World`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{'World'}</li>
                </NavLink>

                <NavLink to={`/Politics`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{'Politics'}</li>
                </NavLink>

                <NavLink to={`/Health`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{'Health'}</li>
                </NavLink>

                <NavLink to={`/Sports`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{'Sports'}</li>
                </NavLink>

                <NavLink to={`/Travel`} activeClassName={classes.active}>
                    <li className={`${classes.li}`}>{'Travel'}</li>
                </NavLink>
            </ul>
        </main>
    );
};

export {UlHeader};