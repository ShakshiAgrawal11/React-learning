import React from 'react';
import { useContext } from 'react';
import MovieContext from '../../../context-hook/src/context/context';

const MoviePage = () => {
    const value=useContext(MovieContext);
    console.log(value);
    const lists=value.lists;
  return (
    <div>
      Total Numner of Movie to see:{value.count}
      {lists.map((list)=>{
        return <div>{list}</div>
      })}
    </div>
  )
}

export default MoviePage
