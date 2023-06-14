import MovieContext from "./context/context";
import MoviePage from "./pages/MoviePage";
import TotalMoviePage from "./pages/TotalMoviePage";

function App() {
  
   
  const lists=["Chak De India","Lagaan","Iron Man","Avataar","Wonder Women"];
  const count=lists.length;
  

  return (
  <>
    <MovieContext.Provider  value={{count,lists}}>
    <MoviePage />
   </MovieContext.Provider>
   <TotalMoviePage/>
   </>
 
  );
}


export default App;
