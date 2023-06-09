import React from 'react'
import { showStyle } from './showStyle';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import EditBook from '../EditBook';

const BookShow = ({book, onDelete,onEdit}) => {
    const {classes} = showStyle();
  const [showEdit,setShowEdit]=useState(false);

  const handleDeleteClick=()=>{
    onDelete(book.id);
    alert(book.id);
  }

  const handleEditClick=()=>{
       setShowEdit(!showEdit)
  }
  console.log("################",book);
  console.log("========================",book.title);

  let content = <h3>{book.title}</h3>
  if(showEdit){
    content=<EditBook onEdit={onEdit} book={book}/>
  }

  return (
   <Paper elevation={2} className={classes.container}>
    
      <div  >{content}</div>
   
      <div className={classes.icon}><ClearIcon onClick={handleDeleteClick}/></div>
      <div className={classes.edit}><EditIcon onClick={handleEditClick}/></div>
   </Paper>
   
  )
}

export default BookShow
