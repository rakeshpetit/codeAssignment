import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import { Provider } from 'react-redux';
import  Home  from './Components/Home';
import Store from './Store/Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <Home/>
        </Provider>
      </div>
    );
  }
}

export default App;
