import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';



class App extends React.Component{

    constructor(){
      super();

      // this.state = {
      //   string: 'Hello Jatin',
      //   int : 23
      // };

      this.state = {
        monsters : [],
        searchField: ''
      }

      // this.handleChange = this.handleChange.bind(this); not for arrow function

    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users}));
    }

    handleChange = (e) => {
      this.setState({ searchField : e.target.value })
    }

    render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );
      return (
        <div className="App">
          <h1> MONSTER ROLODEX </h1>
        <SearchBox  placeholder='Search Monsters' handleChange={ this.handleChange } />
        <CardList  monsters={ filteredMonsters } /> 
        </div>
      );
    }
}

export default App;

// unlike onclick from js, onClick
// unlike class from html, className 