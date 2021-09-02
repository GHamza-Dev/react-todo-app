import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
const TodoList = (props) => (
    <ul className={classes.todo_list}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </ul>        
);

export default TodoList;
