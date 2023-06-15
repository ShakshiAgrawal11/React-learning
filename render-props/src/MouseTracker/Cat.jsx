import React, { Component } from 'react'

export default class Cat extends Component {
    render() {
        const {x,y}=this.props.mouse;
        return (
            <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/articles/Cat_s_Mind_x630.jpg?v=1624444348"
                style={{ position: 'absolute', left: x, top: y, width: "100px" }} />
        );
    }
}
