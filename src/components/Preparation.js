//using class component
import React, { Component } from "react";
import Topic from "./Topic";
import Error from "./Error";
// It extends the component and it should include render method which return null and some html.
class Preparation extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      ismount: true,
      ignoreProps: 0,
      seed: 0,
    };

    //methods
    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };

    this.mountComponent = () => {
      this.setState({ ismount: true });
    };
    this.unmountComponent = () => {
      this.setState({ ismount: false });
    };
    this.ignorePropsMethod = () => {
      this.setState({ ignoreProps: Math.random() });
    };
    this.generateSeed = () => {
      this.setState({ seed: Math.random() });
    };
  }
  componentDidMount() {
    console.log("Component is mounted");
    console.log("-------------------------------------");
  }

  //It run after the render method when component is completely mounted on the display screen.

  render() {
    console.log("Render Method");
    return (
      <>
        <div className="InterviewPrepartion">
          {this.state.ismount && (
            <Topic
              ignoreProps={this.state.ignoreProps}
              seed={this.state.seed}
            ></Topic>
          )}
          <div>Counter: {this.state.counter}</div>

          <div className="buttonsDiv">
            <button onClick={this.increment}> Increment </button>
            <button onClick={this.decrement}> Decrement </button>
          </div>
          <div className="mountUnmountDiv">
            <button onClick={this.mountComponent} disabled={this.state.ismount}>
              {" "}
              Mount{" "}
            </button>
            <button
              onClick={this.unmountComponent}
              disabled={!this.state.ismount}
            >
              {" "}
              Unmount{" "}
            </button>
          </div>

          <button onClick={this.ignorePropsMethod}> Ignore Props</button>
          <button onClick={this.generateSeed}> Generate Seed</button>
          <br></br>
          <br></br>
          <h1> Fetch Api in JS / Error Handling</h1>
          <Error
            ismount={this.state.ismount}
            counter={this.state.counter}
            value1="1"
            value="2"
          ></Error>
        </div>
      </>
    );
  }

  //componentDidUpdate(prevProps, prevState, snapshot) {
  //console.log("component is updated");
  //console.log("-----------------------------------");
  //}
  //component DidUpdate will return everytime you change the value, but there are some values that we don't want
  //to rend componentDidupdate

  //It will run after the html element is removed from the dom
}
//In class component , we can use constructor, state and own methdos.
//State generally refers to application data or properties that need to be tracked.
//In functioncal component , we can use state with the help of state hooks.
//you can use life cycle methods but in functional component it can be help with the help of hooks.
//function Preparation() {
//return <div class="InterviewPrepartion">This is interview Prepartion</div>;
//}
//       binding the reference of increment function with onclick event in react

export default Preparation;

// Component Life Cycle 1. Mounting 2. Updating 3. Error Boundaries 4. Unmounting

//Component Life Cycle : https://www.codevoila.com/post/57/reactjs-tutorial-react-component-lifecycle
