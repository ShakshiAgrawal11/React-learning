import React, { useEffect } from 'react';
import { useState,useRef } from 'react';
import { dropDownStyle } from './DropDownStyle';

const Dropdown = ({options,value,onChange}) => {
  const [isOpen,setIsOpen]=useState(false);
  const {classes}=dropDownStyle();
  const divRef=useRef();


  //code to close a particular dropdown automatically when clicked on next dropdown or outside it
  useEffect(()=>{
    console.log(divRef.current);
    const handler=(event)=>{
        //if no reference is given
        if(!divRef.current){
            return;
        }
        else if(!divRef.current.contains(event.target)){
            setIsOpen(false);
        }
        
    };
    document.addEventListener("click",handler,true);
  },[]);

  const onOptionClick=(option)=>{
    console.log("I have been clicked",option);
    setIsOpen(false);
    onChange(option);
  };

  const renderOptions=options.map((option)=>{
        return <div className={classes.dropContainer} onClick={()=>onOptionClick(option)} key={option.value}>{option.label}</div>
  });
 
//   let content="Select";
//   if(selection){
//     content=selection.label;
//   }

  return (
    <div ref={divRef} className={classes.mainContainer}>
      <h1>Dropdown</h1>
      <h3>In which language you are expert?</h3>
      <h4 onClick={()=>setIsOpen(!isOpen)}>{value?.label || "Select..."}</h4>
      <div className={classes.box}>{isOpen && renderOptions}</div>
     
    </div>
  )
}

export default Dropdown
