import React, { Component } from 'react'

export default class ButtonCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    //     this.incrementCount = this.incrementCount.bind(this);
    // }


    // incrementCount() {
    //     // Changing state 
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    render() {
        console.log(this.props)
        const {count , incrementCount}=this.props;
        return (
            <div style={{width:"300px", margin:"2rem",padding:"2rem"}}>
                 <h3 style={{marginLeft:"3rem"}}> {count}</h3>
                 <button onClick={incrementCount}> Increment Count</button>
            </div>
        )
    }
}
