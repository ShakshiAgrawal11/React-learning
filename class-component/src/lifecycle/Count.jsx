import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props);
        console.log("Constructor is called")
        console.log(props);
        this.state={
            count:0,
        }
        this.incrementCount = this.incrementCount.bind(this);
        console.log(this);
    }


    incrementCount() {
        // Changing state 
        this.setState({
            count:this.state.count+1
        })
    }


  //  static getDerivedStateFromProps(props, state) {
  //     //console.log("----",props.intitialCount);
  //     console.log(props.initialCount)
  //     return {count:100};
  //   };
   
  render() {
    return (
      <div>
        <h3> {this.state.count}</h3>
        <button onClick={this.incrementCount}> Increment Count</button>
      </div>
    )
  }
}
