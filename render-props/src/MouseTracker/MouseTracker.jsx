import React, { Component } from 'react';
import Mouse from './Mouse';
import MouseWithCat from "./MouseWithCat";
import Cat from './Cat';


export default class MouseTracker extends Component {

    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                {/* <Mouse /> */}
                {/* <MouseWithCat /> */}
                <Mouse render={(mouse)=>(
                    <Cat mouse={mouse}/>
                )}/>
            </>
        );
    }
}
