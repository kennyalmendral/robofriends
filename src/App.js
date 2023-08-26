import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField';
import CardList from './CardList';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLocaleLowerCase().includes(this.state.searchField.toLowerCase()));

    return (
      <div id="app" className="tc">
        <header className="header tc">
          <h1 className="f1">Robofriends</h1>

          <SearchField searchChange={this.onSearchChange} />
        </header>

        <div>
          <CardList robots={filteredRobots} />
        </div>
      </div>
    );
  }
}

export default App;