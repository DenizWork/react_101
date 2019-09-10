import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    age: '',
    pretax: '',
    saving: '',
    contribute: '',
  };

  handleChange = (event) => {
    this.setState({
      age:event.target.value,
      pretax:event.target.pretax,
      saving:event.target.saving,
      contribute:event.target.contribute,
    })
    console.log('age', event);
  };

  handleClick = (event) => {
    console.log('button clicked');
    event.preventDefault()
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

            <button onClick={this.handleClick}>Submit</button>
          </form>
          <p className="lead">
            I am {this.state.age}  years old with {this.state.pretax} in pre-tax income and {this.state.saving} in savings.
            I can contribute {this.state.contribute} every month to my retirement savings.
            <p className="lead">Warning: This is less than ___ off your monthly income.</p>
          </p>
          <p className="lead">The earliest you can retire with ___ of your income is __.</p>
        </header>
      </div>
    );
  }
}

export default App;
