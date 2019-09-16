import React, { Component } from 'react';
import './App.css';

import Result from "./components/Result";

class App extends Component {
  state = {
    retirement : [
      {age: ''},
      {pretax: ''},
      {saving: ''},
      {contribute: ''},
    ]
  };

  handleChange = (event) => {
    console.log('this is event inside on change', event.target.value);
    this.setState({
      retirement : [
        {age:event.target.value},
        {pretax:event.target.value},
        {saving:event.target.value},
        {contribute:event.target.value},
      ]
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log('button clicked event', event);
    console.log('button clicked', this.state);
    this.setState(
      {retirement : [
      {age:this.state.age},
      {pretax:this.state.pretax},
      {saving:this.state.saving},
      {contribute:this.state.contribute},
      {calculation:54}
      ]}
    )
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Retirement Calculator </h1>
          <form>
            <h3>Enter your retirement information:</h3>

            <label htmlFor="exampleInputAge">Age</label>
            <input className="form-control" type="text" id="input_age"  value={this.state.age} onChange={this.handleChange} placeholder="30" name="age"/>

            <label htmlFor="exampleInputPreTax">Pre-Tax</label>
            <input className="form-control" type="text" id="input_pretax"  value={this.state.pretax} onChange={this.handleChange} placeholder="$85,000" name="pretax"/>

            <label htmlFor="exampleInputSaving">Saving</label>
            <input className="form-control" type="text" id="input_saving" value={this.state.saving} onChange={this.handleChange} placeholder="$30,000" name="saving"/>

            <label htmlFor="exampleInputContribute">Contribute</label>
            <input className="form-control" type="text" id="input_contribute" value={this.state.contribute} onChange={this.handleChange} placeholder="$50,000" name="contribute"/>
          </form>
          <Result value={this.state.retirement} onSave={this.handleClick}/>
        </header>
      </div>
    );
  }
}

export default App;
