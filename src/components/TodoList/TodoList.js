import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import NavigationBar from '../NavigationBar/NavigationBar';

const TodoList = (props) => {
    let todoList = null;
    
    switch (props.filterBy) {
        case 'completed':
            todoList = props.todos.filter(todo => todo['done'] === true)
                .map(todo => (
                <TodoItem id={todo.id}
                key={todo.id} text={todo.text} completed={todo.done} 
                onCheck={props.onCheck} />
            ));
            break;

        case 'active':
            todoList = props.todos.filter(todo => todo['done'] === false)
                .map(todo => (
                <TodoItem id={todo.id}
                key={todo.id} text={todo.text} completed={todo.done} 
                onCheck={props.onCheck} />
            ));
            break;
    
        default:
            todoList = props.todos.map(todo => (
                <TodoItem id={todo.id}
                key={todo.id} text={todo.text} completed={todo.done} 
                onCheck={props.onCheck} />
            ));
            break;
    }

    return(
        <div className={classes.todo_list}>
            <ul>
                {todoList}
            </ul>
            <NavigationBar onChangeFilter={props.onChangeFilter} />
        </div>
    );  
};

export default TodoList;
