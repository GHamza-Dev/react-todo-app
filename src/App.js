import { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Wrapper from './components/Layout/Header/Wrapper/Wrapper';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Input from './components/UI/Input/Input';
import TodoList from './components/TodoList/TodoList';
import LocalStorage from './helpers/LocalStorage';
class App extends Component{

  constructor(props){
    super(props);
    
    this.storage = new LocalStorage(
      'todo-app-challenge-xx12354'
    );

    this.state = {
      todos: this.storage.getData(),
      input:'',
      filterBy:'all'
    }
  }
  
  toggleCompletedHandler = (id) => {
    let todoList = [...this.state.todos].map(todo => {
      if (todo['id'] === id) {
        todo['done'] = !todo['done'];
      }
      return todo;
    });

    this.storage.setData(todoList);

    this.setState({todos:todoList});
  }

  createTodoHandler = (e) => {
    e.preventDefault();
    const inputValue = this.state.input;
    if (inputValue === '') {
      alert('Oops it seems like you feel boring ;) if though please take a rest.')
      return;
    }
    const todoList = this.storage.getData();
    const id = `${Math.random()*10}sdf1`;
    todoList.push({id:id,text:inputValue,done:false});
    
    this.storage.setData(todoList);

    this.setState({todos:todoList});

    this.setState({input:''});    
  }

  removeTodoHandler = (id) => {
    const todoList = this.storage.getData().filter(todo=>{
      return todo['id'] !== id;
    });

    this.storage.setData(todoList);

    this.setState({todos:TodoList});

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
    this.storage.getData().forEach(todo => {
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
          <TodoList todos={this.storage.getData()} 
          onCheck={this.toggleCompletedHandler} 
          onChangeFilter={this.changeFilterOption}
          filterBy={this.state.filterBy}
          itemsLeft={this.getLeftItems()} 
          onRemove={this.removeTodoHandler} />
        </Body>
        <p style={{fontSize:'12px',textAlign:'center'}}>(Working on drag and drop feature)</p>
      </Layout>
    );
  }
}

export default App;
