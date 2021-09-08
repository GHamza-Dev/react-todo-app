import React from 'react';
import classes from './TodoItem.module.css';
import Checkbox from '../UI/CheckBox/CheckBox';
import cross_icon from '../../assets/images/icon-cross.svg';

const TodoItem = ({id,text,completed,onCheck,onRemove}) => {

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
            <button onClick={()=>{onRemove(id)}} className={classes.delete}>
                <img src={cross_icon} alt="cross" />
            </button>
        </li>
    );
};

export default TodoItem;
