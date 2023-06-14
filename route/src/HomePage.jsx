import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="seven"> 7 Wonders</Link>
        </li>
        <li>
            <Link to="criteria"> Crieria</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
