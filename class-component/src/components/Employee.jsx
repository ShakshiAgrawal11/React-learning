import React, { Component } from 'react'
import Department from './Department';

export default class Employee extends Component {
    constructor(props) {
        super(props);
        // console.log(props.City);
        // console.log(this.props.City);
        console.log("props", props);
        console.log("this.props", this.props);

        console.log("this", this);


        this.state = {
            Name: props.Name,
            City: this.props.City,
            Comp: this.props.Comp,
        };
        //bind method -> to bind this keyword
        // this.updateState = this.updateState.bind(this)
    };

    updateState() {
        // Changing state 
        this.setState({
            Name: "Raman Verma",
            City: "Delhi",
            Comp: "55 tech"
        })
        console.log("updated state this",this);
        console.log(this.state);
    }

    render() {
        //console.log(this.props);
        // setState({ Name : "Rahul Jain", City:"Rajasthan" })
        console.log("State ->", this.state);

        return (
            <div style={{ margin: "5rem" }}>
                <h1 style={{ color: "red" }}>Here is employee details...</h1>
                <h3>Name: <span style={{ color: "blue" }}>{this.state.Name}</span>  <br /> <br />
                    Company Name: <span style={{ color: "blue" }}>{this.state.Comp}</span> <br /><br />
                    City: <span style={{ color: "blue" }}>{this.state.City}</span>
                </h3>
                <Department Name={this.props.DeptName} />
                {/* 1 */}
                {/* <button onClick={this.updateState}>Update State</button> */}
                {/* 2 */}
                <button onClick={()=>{this.updateState()}}>Update State</button>
                <button onClick={() => alert("Dont Press it!!")}>Alert Button</button>

            </div>
        )
    }
}
