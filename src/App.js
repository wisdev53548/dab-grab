import React, { Component } from 'react';
import './App.css';

import Dabber from './Components/Dabbers'
import WinnerInput from './Components/WinnerInput'

class App extends Component {
  state = {
    dabbers: [
      {name: 'Josh'},
      {name: 'Ethan'},
      {name: 'Jack'}
    ],
    winner: ''
  }

  winnerHandler = e => {
    this.setState({winner: e.target.value})
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Whoever has the most DABs no's da wae!</h1>
        <h2>Here's the DABtab:</h2>
        <Dabber name={this.state.dabbers[0].name} />
        <Dabber name={this.state.dabbers[1].name} />
        <Dabber name={this.state.dabbers[2].name} />
        <WinnerInput changed={this.winnerHandler} />
        <h2>The person who can haz DABburger is: {this.state.winner}</h2>
      </div>
    );
  }
}

export default App;
