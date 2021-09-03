import React from 'react';
import classes from './NavigationBar.module.css';

const navigationBar = (props) => (
    <nav className={classes.navigation_bar}>
        <p>5 items left</p>
        <ul>
            <li onClick={props.onChangeFilter} className={classes.active} >All</li>
            <li onClick={props.onChangeFilter}>Active</li>
            <li onClick={props.onChangeFilter}>Completed</li>
        </ul>
        <p>Clear Completed</p>
    </nav>
);

export default navigationBar;
