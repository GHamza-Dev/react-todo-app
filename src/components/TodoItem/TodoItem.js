import React from 'react';
import classes from './TodoItem.module.css';
import Checkbox from '../UI/CheckBox/CheckBox';

const TodoItem = (props) => (
    <li className={classes.todo_item}>
        <Checkbox />
        <p className={classes.todo_text}>Complet Todo App on Frontend Mentor</p>
    </li>
);

export default TodoItem;
