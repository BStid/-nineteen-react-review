import React, { Component } from "react";
import List from "./List";
import jedi from "./jedi.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jedi: jedi,
      pageStart: 0,
      pageEnd: 20,
      person: null
    };
    this.paginate = this.paginate.bind(this);
    this.displayPerson = this.displayPerson.bind(this);
  }

  paginate(direction) {
    if (direction === "+") {
      this.setState({
        pageStart: this.state.pageStart + 20,
        pageEnd: this.state.pageEnd + 20
      });
    } else {
      this.setState({
        pageStart: this.state.pageStart - 20,
        pageEnd: this.state.pageEnd - 20
      });
    }
  }

  displayPerson(name) {
    let person = this.state.jedi.find(person => {
      return person.name === name;
    });
    this.setState({ person: person });
  }

  render() {
    let { pageStart, pageEnd, person } = this.state;
    let paginatedJedi = this.state.jedi.slice(pageStart, pageEnd);
    console.log("paginatedJedi: ", paginatedJedi);
    return (
      <div className="App">
        <aside className="side_bar">
          <List
            handleClick={this.displayPerson}
            childClickHandler={this.paginate}
            paginatedJedi={paginatedJedi}
          />
        </aside>
        {this.state.person && (
          <main className="main">
            <h1>{this.state.person.name}</h1>
            <h3>{this.state.person.height}</h3>
            <h3>{this.state.person.eye_color}</h3>
          </main>
        )}
      </div>
    );
  }
}

export default App;
