import React from 'react';
import classes from './Input.module.css';

const Input = (props) => (
    <div className={classes.input_group}>
        <div className={classes.circle}></div>
        <input onChange={props.onType}
        className={classes.input} type="text" 
        placeholder="What are you planing for today?" 
        value={props.inputValue}/>
    </div>
);

export default Input;
