import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }


    incrementCount() {
        // Changing state 
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }


    
    render() {
        console.log(this.props);
        return (
            <div>
                I am in counter component
                {this.props.render(this.state.count , this.incrementCount)}
            </div>
        )
    }
}

export default Counter
