import Heading from "./componenets/Heading";
import { useEffect, useState } from "react";
import CreateBook from "./componenets/CreateBook/CreateBook";
import BookLists from "./componenets/BookLists/BookLists";
import axios from "axios";
function App() {
  const [books,setBooks] = useState([]);
   

  const fetchData=async ()=>{
    const response= await axios.get("http://localhost:3010/books")
    setBooks(response.data);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const createBook=async (title)=>{
    const response = await axios.post("http://localhost:3010/books",{
      title:title
    });
    console.log(response);
  //  const updatedBook=[
  //    ...books,
  //    {id:books.length==0 ?1:books.length+1,  title:title}
  //  ];
  //   setBooks( updatedBook);
  //   console.log(books);
  const updatedBook=[
       ...books,
       response.data
     ];
      setBooks( updatedBook);
      console.log(books);
  };

  const deleteBookById =async (id)=>{
    console.log("Id to be deleted",id);
    await axios.delete(`http://localhost:3010/books/${id}`);
    
    const newList=books.filter((book)=>{
      return book.id!==id;
    })
    setBooks(newList);
  };

  const editBook =async (id,newTitle)=>{
    const response= await axios.put(`http://localhost:3010/books/${id}`,{
      title:newTitle,
    })
    console.log("In App =>",response.data);
      const updatedBook=books.map((book)=>{
          if(book.id===id)
            // return {...book,title:newTitle};
            return {...book,...response.data}
         return book;
      })
      setBooks(updatedBook);
      console.log("updated books",updatedBook);
  };
  return (
    <div >
      <Heading />
      <CreateBook onSubmit={createBook}/>
      <BookLists books={books} onDelete={deleteBookById} onEdit={editBook} />
      
    </div>
  );
}

export default App;
