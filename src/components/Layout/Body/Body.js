import React from 'react';
import classes from './Body.module.css';

const Body = (props) => (
    <div className={classes.body}>
        {props.children}
    </div>
);

export default Body;
