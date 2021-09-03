import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import NavigationBar from '../NavigationBar/NavigationBar';

const TodoList = (props) => {
    let todoList = props.todos.map(todo => (
        <TodoItem id={todo.id}
        key={todo.id} text={todo.text} completed={todo.done} 
        onCheck={props.onCheck} />
    ));

    return(
        <div className={classes.todo_list}>
            <ul>
                {todoList}
            </ul>
            <NavigationBar />
        </div>
    );  
};

export default TodoList;
