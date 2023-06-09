import React from 'react'
import { listStyle } from './listStyle'
import BookShow from '../BookShow.js/BookShow';

const BookLists = ({books , onDelete, onEdit}) => {
  const {classes} = listStyle();
  //console.log("bookkkkkkkkkk",books.length);
  return (
    <div className={classes.container}>
      {books.map((book)=>{
        return  <BookShow  book={book} onDelete={onDelete} onEdit={onEdit}/>
      })}
    </div>
  )
}

export default BookLists
