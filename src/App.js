import { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';

class App extends Component{


  render(){
    return (
      <Layout>
        <Header>
          <h1>Hello world</h1>
        </Header>
        <Body>
          
        </Body>
      </Layout>
    );
  }
}

export default App;
