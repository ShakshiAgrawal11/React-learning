import React from 'react';
import { Link ,Route, Routes} from 'react-router-dom';


const SevenWonders = ({match}) => {
    console.log(match);
 return (
   <div>
     <h1>7 Wonders Of the World</h1>


     <ul>
       <li>
        <Link to="/seven/wall"> Great Wall of China</Link>
       </li>
       <li>Chichén Itzá</li>
       <li>Petra</li>
       <li>Machu Picchu</li>
       <li>Christ the Redeemer</li>
       <li>Colosseum</li>
       <li>Taj Mahal</li>
     </ul>

    {/* < Routes> 
            <Route exact path={`${match.path}/wall`} element={<div> This is technology </div>}/>
           
    </Routes> */}
    
   </div>
 )
}


export default SevenWonders
