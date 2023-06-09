import React from 'react';
import { useState } from 'react';
import { windowStyle } from './style';

const Window = ({ props }) => {
    
    const [showIndex, setShowIndex] = useState(0);
    const {classes} = windowStyle();

    const renderedList = props.map((list, index) => {
        const isDisplay = index === showIndex;

        const content = isDisplay && <div>{list.desc}</div>
        return (
            <div key={list.id} className={classes.eachContainer}>
                <div onClick={() => setShowIndex(index)} className={classes.heading}>{list.title}</div>
                <div className={classes.content}>{content}</div>
            </div>
        )
    })
    return <div className={classes.mainContainer}>{renderedList}</div>
}

export default Window
