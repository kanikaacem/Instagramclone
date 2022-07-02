import React, { Component } from "react";

//const ErrorComponent = () => <div>{props.ignore}</div>;
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seed: 0,
    };
  }
  componentWillUnmount() {
    console.log("component is unmounted");
    console.log("-------------------------------------");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component is updated");
    console.log("-----------------------------------");
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (
      nextProps.ignoreProps &&
      nextProps.ignoreProps !== this.props.ignoreProps
    ) {
      return false;
    }
    // will not updated the value of seed
    else if (nextProps.seed && nextProps.seed !== this.props.seed) {
      return true;
    }
    return true;
  }
  //get the value from the props and pass it to the state
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
      };
    }
  }

  //run before rendering
  //reference https://www.geeksforgeeks.org/reactjs-getsnapshotbeforeupdate-method/
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps.seed);
    return null;
  }

  componentDidCatch(error, info) {
    return true;
  }

  render() {
    return (
      <>
        <h1 id="interview-heading"> React JS</h1>
        <span> Seed Value : {this.state.seed} </span>
      </>
    );
  }
}

export default Topic;
