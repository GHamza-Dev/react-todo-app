import { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Wrapper from './components/Layout/Wrapper/Wrapper';
import Logo from './components/Logo/Logo';
class App extends Component{


  render(){
    return (
      <Layout>
        <Header>
          <Wrapper>
            <Logo/>
          </Wrapper>
        </Header>
        <Body>
          
        </Body>
      </Layout>
    );
  }
}

export default App;
