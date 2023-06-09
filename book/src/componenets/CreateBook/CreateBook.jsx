import React, { useState } from 'react';
import { barStyle } from './style';


const CreateBook = ({onSubmit}) => {
  const {classes} = barStyle();
  const [title,setTitle] = useState("");


 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("book to be added",title);
    onSubmit(title);
    setTitle("");
 }

  return (
    <div className={classes.container}>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default CreateBook
