import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
const TodoList = (props) => {
    let todoList = props.todos.map(todo => (
        <TodoItem id={todo.id}
        key={todo.id} text={todo.text} completed={todo.done} 
        onCheck={props.onCheck} />
    ));

    return(
        <ul className={classes.todo_list}>
            {todoList}
        </ul>
    );  
};

export default TodoList;
