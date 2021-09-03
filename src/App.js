import { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Wrapper from './components/Layout/Header/Wrapper/Wrapper';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Input from './components/UI/Input/Input';
import TodoList from './components/TodoList/TodoList';
class App extends Component{

  state = {
    todos:[
      {id:11,text:'Complete online JavaScript course',done:true},
      {id:12,text:'Jog around the park 3x',done:false},
      {id:13,text:'10 minutes meditation',done:false},
      {id:14,text:'Read for 1 hour',done:false},
      {id:15,text:'Pick up groceries',done:false},
      {id:16,text:'Complete online JavaScript course',done:false}
    ],
    input:'',
    filterBy:'all'
  }

  toggleCompletedHandler = (id) => {
    let todoList = [...this.state.todos].map(todo => {
      if (todo['id'] === id) {
        todo['done'] = !todo['done'];
      }
      return todo;
    });

    this.setState({
      todos:todoList
    })
  }

  createTodoHandler = (e) => {
    e.preventDefault();
    const inputValue = this.state.input;
    if (inputValue === '') {
      alert('Oops it seems like you feel boring ;) if though please take a rest.')
      return;
    }
    const todoList = [...this.state.todos];
    const id = this.state.todos[this.state.todos.length-1]['id']+1;
    todoList.push({id:id,text:inputValue,done:false});
    
    this.setState({todos:todoList});

    // reset input
    this.setState({input:''});
  }

  updateInputStateHandler = (e) => {
    this.setState({
      input:e.target.value
    })
  }

  changeFilterOption = (e) =>{
    const filterOption = e.target.textContent.toLowerCase().trim();
    this.setState({filterBy:filterOption});
  }

  getLeftItems = () =>{
    let itemsLeft = 0;
    this.state.todos.forEach(todo => {
      if(!todo['done']) itemsLeft++;
    });

    return itemsLeft;
  }

  render(){
    return (
      <Layout>
        <Header>
          <Wrapper>
            <HeaderTop />
            <form onSubmit={this.createTodoHandler}>
              <Input onType={this.updateInputStateHandler} 
              inputValue={this.state.input}/>
            </form>
          </Wrapper>
        </Header>
        <Body>
          <TodoList todos={this.state.todos} 
          onCheck={this.toggleCompletedHandler} 
          onChangeFilter={this.changeFilterOption}
          filterBy={this.state.filterBy}
          itemsLeft={this.getLeftItems()} />
        </Body>
      </Layout>
    );
  }
}

export default App;
