import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App2">
        <header className="App-header">
         <h1>Hello, World!</h1>
         <button onClick={this.greet}>Greet</button>
        </header>
        <div>{this.state.greeting}</div>
      </div>
    );
  }

  greet = () => {
    this.setState({ 
      greeting: "Hello, web students!"
    })
  }

}



export default App;
