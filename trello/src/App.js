import Lists from "./components/Lists";
import Heading from "./components/Heading";
import { Box } from "@mui/material";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import Modal from "./components/Modal/Modal";

function App() {


  return (
   < DndProvider backend={HTML5Backend }>
       < Heading/>
       <Lists/>
       {/* <Modal /> */}
   </ DndProvider>
     
   
  );
}

export default App;
