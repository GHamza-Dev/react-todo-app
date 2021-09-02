import { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Wrapper from './components/Layout/Header/Wrapper/Wrapper';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Input from './components/UI/Input/Input';
class App extends Component{


  render(){
    return (
      <Layout>
        <Header>
          <Wrapper>
            <HeaderTop />
            <Input />
          </Wrapper>
        </Header>
        <Body>
          
        </Body>
      </Layout>
    );
  }
}

export default App;
