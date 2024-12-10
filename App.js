import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Checkpoint State</h1>
        <button className="toggle-button" onClick={this.handleToggle}>
          {this.state.isVisible ? 'Hide' : 'Show'}
        </button>
        {this.state.isVisible && <Person />}
      </div>
    );
  }
}
