import React from 'react';
import classes from './CheckBox.module.css';

const checkbox = ({id,completed,onCheck}) => (
    <input 
    checked={completed}  
    className={classes.checkbox} type="checkbox" 
    onChange={()=>onCheck(id)} />
);

export default checkbox;
