import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props);
        console.log("Constructor is called")
        console.log(props);
        this.state={
            count:0,
            heading:"Old heading"
        }
        this.incrementCount = this.incrementCount.bind(this);
        console.log(this);
    }


    incrementCount() {
        // Changing state 
        console.log(this);
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
        console.log("new count",this.state.count)  
    }


  //  static getDerivedStateFromProps(props, prevState) {
  //     //console.log("----",props.intitialCount);
  //     console.log(props.initialCount)
  //     return {count:100};
  //   };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ heading: 'New heading!!!!' })
      },3000)
    }
   
  render() {
    return (
      <div>
        <h3>{this.state.heading}</h3>
        <h3> {this.state.count}</h3>
        <button onClick={this.incrementCount}> Increment Count</button>
      </div>
    )
  }
}
