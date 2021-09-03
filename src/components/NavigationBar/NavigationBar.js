import React from 'react';
import classes from './NavigationBar.module.css';

const navigationBar = (props) => (
    <nav className={classes.navigation_bar}>
        <p>5 items left</p>
        <ul>
            <li className={classes.active} >All</li>
            <li>Active</li>
            <li>Completed</li>
        </ul>
        <p>Clear Completed</p>
    </nav>
);

export default navigationBar;
