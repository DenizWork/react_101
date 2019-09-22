import React, { Component } from 'react';
import './App.css';

import Result from "./components/Result";

class App extends Component {
  state = {
    retirement : [
      {id:1, age: ''},
      {id:2, pretax: ''},
      {id:3, saving: ''},
      {id:4, contribute: ''},
    ]
  };

  handleChange = (event) => {
    console.log('this is event inside on change', event.target);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    })
    };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked this state', this.state);
    // const retirement = this.state.retirement.map(single => {
    //   single.key = this.state.value
    // });
    // this.setState(
    //   { retirement }
      // {retirement : [
      // {id:1, age:this.state.age},
      // {id:2, pretax:this.state.pretax},
      // {id:3, saving:this.state.saving},
      // {id:4, contribute:this.state.contribute},
      // {calculation:"54"}
    // ]}
    // )
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Retirement Calculator </h1>
          <form onSubmit={this.handleSubmit}>
            <h3>Enter your retirement information:</h3>

            <label htmlFor="exampleInputAge">Age</label>
            <input className="form-control" type="text" id="input_age"  key={this.state.id} value={this.state.age} onChange={this.handleChange} placeholder="30" name="age"/>

            <label htmlFor="exampleInputPreTax">Pre-Tax</label>
            <input className="form-control" type="text" id="input_pretax" key={this.state.id} value={this.state.pretax} onChange={this.handleChange} placeholder="$85,000" name="pretax"/>

            <label htmlFor="exampleInputSaving">Saving</label>
            <input className="form-control" type="text" id="input_saving" key={this.state.id} value={this.state.saving} onChange={this.handleChange} placeholder="$30,000" name="saving"/>

            <label htmlFor="exampleInputContribute">Contribute</label>
            <input className="form-control" type="text" id="input_contribute" key={this.state.id} value={this.state.contribute} onChange={this.handleChange} placeholder="$50,000" name="contribute"/>
            <input type="submit" value="Submit" />
          </form>
          <Result retirement={this.state}/>
        </header>
      </div>
    );
  }
}

export default App;
