import React from 'react';
import classes from './TodoItem.module.css';
import Checkbox from '../UI/CheckBox/CheckBox';

const TodoItem = ({id,text,completed,onCheck}) => {

    let textClasses = [
        classes.todo_text,
        completed ? classes['completed'] : null
    ];

    return (
        <li className={classes.todo_item}>
            <Checkbox id={id} completed={completed} 
            onCheck={onCheck} 
            />
            <p className={textClasses.join(' ')}>{text}</p>
        </li>
    );
};

export default TodoItem;
