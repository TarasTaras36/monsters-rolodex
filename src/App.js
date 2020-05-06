import React from "react";
import axios from "axios";
import "./App.css";
import { Component } from "react";
import Card from "./components/card/card.component";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ monsters: res.data });
    });
  }

  handleChange = (e) => {this.setState({searchField: e.target.value}) }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
     return monster.name.toLowerCase().includes(searchField.toLowerCase())
      
    })
    return (

      
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        
        placeholder="search monster"
        handleChange={this.handleChange}
        
        />
        
        <CardList monsters={filteredMonsters }></CardList>
      </div>
    );
  }
}

export default App;
