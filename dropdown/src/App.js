import Dropdown from "./componenets/Dropdown";
import { useState } from "react";

function App() {
  const [selection,setSelection]=useState(null);
  
  const handleSelect =(option)=>{
    console.log("OPtion selected",option);
    setSelection(option);
  }
  const options=[
    {label:"Java", value:"java"},
    {label:"C",value:"c"},
    {label:"C++",value:"c++"},
    {label:"Python",value:"python"},
  ]
  return (
    <>
    <Dropdown options={options} value={selection} onChange={handleSelect}/>
    <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </>
    
  );
}

export default App;
