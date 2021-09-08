import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import NavigationBar from '../NavigationBar/NavigationBar';

const TodoList = (props) => {
    let todoList = null;
    let alertMsg = 'Note that this is a static todo, it means that you can nor mark it as completed nither delete it.\nPlease type and hit enter to create a new todo ;)';
    
    switch (props.filterBy) {
        case 'completed':
            todoList = props.todos.filter(todo => todo['done'] === true)
                .map(todo => (
                <TodoItem id={todo.id}
                key={todo.id} text={todo.text} completed={todo.done} 
                onCheck={props.onCheck} onRemove={props.onRemove} />
            ));
            break;

        case 'active':
            todoList = props.todos.filter(todo => todo['done'] === false)
                .map(todo => (
                <TodoItem id={todo.id}
                key={todo.id} text={todo.text} completed={todo.done} 
                onCheck={props.onCheck} onRemove={props.onRemove} />
            ));
            break;
    
        default:
            todoList = [...props.todos].map(todo => (
                <TodoItem id={todo.id}
                key={todo.id} text={todo.text} completed={todo.done} 
                onCheck={props.onCheck} onRemove={props.onRemove} />
            ));
            break;
    }

    return(
        <div className={classes.todo_list}>
            <ul>
                {todoList.length > 0 ? todoList : (
                    <TodoItem id={1}
                    key={1} text='Type and hit enter to create a new todo.' completed={false} 
                    onCheck={()=>alert(alertMsg)} onRemove={()=>alert(alertMsg)} />
                    )
                }
            </ul>
            <NavigationBar itemsLeft={props.itemsLeft} 
            onChangeFilter={props.onChangeFilter} />
        </div>
    );  
};

export default TodoList;
