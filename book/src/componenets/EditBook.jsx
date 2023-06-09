import React from 'react';
import { useState } from 'react';

const EditBook = ({book,onEdit}) => {
    console.log("in book edit-0--",book);
    console.log(book);
    const [newTitle,setNewTitle]=useState(book.title);

    const handleSubmit=(e)=>{
        e.preventDefault();
        onEdit(book.id,newTitle);
       
    }
  return (
   <form onSubmit={handleSubmit} >
     <label htmlFor="">Title</label>
     <input type="text"  defaultValue={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
     <button>Save</button>
   </form>
  )
}

export default EditBook
