import React, { Component } from "react";
import './Counter.css';

import Step from "./Step";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      stepValue: 1,
    };
  }

//STEP
  changeStep =(event)=> {
    
    this.setState({stepValue: event.target.value}) 
    //console.log(this.state.stepValue)
  }


  changeValue = (action) => {
    // ES6 method

    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;
      let currentStepValue = prevState.stepValue; 
      //console.log(this.state.stepValue)
      console.log(currentCounterValue)


      if (action === "add") {
        //dodawanie
        currentCounterValue += +currentStepValue;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return {
        counterValue: currentCounterValue,
      };
    });
  };

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  render() {
    let clockElement = "";

    if (this.state.showClock) {
      // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = (
        <span onClick={this.toggleClock} className="show-clock">
          show clock
        </span>
      );
    }

    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel /* step */ buttonStep={this.state.stepValue} buttonMethod={this.changeValue} />
        {clockElement}
        
        <Step stepMethod={this.changeStep} /* stepValue={this.state.stepValue} */ />
      </div>
    );
  }
}

export default Counter;
