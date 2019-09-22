import React, { Component } from "react";

class Result extends Component {
  state = {
    value: this.props.value
  };

  render() {
    console.log('props in result', this.props.onClick);
    return(
      <div>
        <button onClick={this.props.onClick}>Submit</button>
        <p className="lead">
          I am {this.props.value[0].age} years old with {this.props.value[1].pretax} in pre-tax income and {this.props.value[2].saving} in savings.
          I can contribute {this.props.value[3].contribute} every month to my retirement savings.</p>
          <span className="lead">Warning: This is less than { this.props.value[0].calculation } off your monthly income.</span>
        <p className="lead">The earliest you can retire with ___ of your income is __.</p>
    </div>)
  }
}

export default Result;
