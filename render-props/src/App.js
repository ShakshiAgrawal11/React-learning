import MouseHover from "./components/MouseHover";
import User from "./components/User";
import ButtonCounter from "./components/ButtonCounter";
import Counter from "./components/Counter";
import MouseTracker from "./MouseTracker/MouseTracker";

function App() {
  return (
    <>

      <MouseTracker />

    <div  >
      <h1>Render Props</h1>
      in Counter
      <Counter render={(count , incrementCount) =>(
               <ButtonCounter count={count} incrementCount={incrementCount}/>
      )}/>

      <Counter render={(count , incrementCount)=>(
                <MouseHover  count={count} incrementCount={incrementCount}/>
      )}/>
      {/* <ButtonCounter />
      <MouseHover /> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? alert("Shakshi"):"Guest"} /> */}
    </div>

   
   
    </>
  );
}

export default App;
