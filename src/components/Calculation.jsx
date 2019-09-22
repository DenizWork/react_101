import React, { Component } from "react";


const Calculation = function(age) {
      if (age > 45) {
        return <span className="lead">Warning: This is less than 30% off your monthly income.</span>;
      } else {
      return <span className="lead">Warning: This is less than 20% off your monthly income.</span>
    }}

export default Calculation;

