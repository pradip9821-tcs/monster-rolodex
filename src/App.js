import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((monster) => {
        this.setState({ monster});
      });
  }

  render() {
    const { monster, search } = this.state;
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>જંગલી માનવ</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ search: e.target.value })}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
