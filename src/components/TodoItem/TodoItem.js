import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = (props) => (
    <li className={classes.todo_item}>
        <h4>X</h4>
        <p className={classes.todo_text}>Complet Todo App on Frontend Mentor</p>
    </li>
);

export default TodoItem;
