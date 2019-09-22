import React, { Component } from "react";
import Calculation from "./Calculation";

class Result extends Component {

  render() {
    const retirement = this.props.retirement;
    console.log('props in result', retirement);
    return(
      <div>
        <p className="lead">
          I am {retirement.age} years old with {retirement.pretax} in pre-tax income and {retirement.saving} in savings.
          I can contribute {retirement.contribute} every month to my retirement savings.</p>
        <Calculation age={retirement.age} />
        <p className="lead">The earliest you can retire with ___ of your income is __.</p>
      </div>)
  }
}

export default Result;

