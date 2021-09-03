import React from 'react';
import classes from './NavigationBar.module.css';

const navigationBar = (props) => (
    <nav className={classes.navigation_bar}>
        <p>
            {props.itemsLeft === 1 ? `One item left` : `${props.itemsLeft} Items left`} 
        </p> 
        <ul>
            <li onClick={props.onChangeFilter} className={classes.active} >All</li>
            <li onClick={props.onChangeFilter}>Active</li>
            <li onClick={props.onChangeFilter}>Completed</li>
        </ul>
        <p>Clear Completed</p>
    </nav>
);

export default navigationBar;
