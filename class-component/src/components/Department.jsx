import React, { Component } from 'react'

export default class Department extends Component {
    render() {

        //Props are read only property we can only change its value
        //For this use state
        //this.props.Name = "nothing"

        return (

            <div>

                <h3 style={{ color: "purple" }}>Department Details...</h3>
                <h3>Name: <span style={{ color: "blue" }}>{this.props.Name}</span>  <br /> <br />
                </h3>
            </div>
        )
    }
}
