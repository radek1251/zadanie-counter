import React, { Component } from "react";


class Step extends Component {
  render() {
    

    return (
      <div>
        <span>Krok: </span>
        <input onChange={(e)=> this.props.stepMethod(e) } type="number" className="inputNumber" />
      </div>
    );
  }
}

export default Step;
