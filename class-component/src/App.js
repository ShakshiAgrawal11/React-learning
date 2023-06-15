import Employee from "./components/Employee";
import MyComponent from "./components/MyComponenet";
import This from "./components/This";
import Count from "./lifecycle/Count";

function App() {
 
  return (
    <div >
      <MyComponent/>
      <This/>
      <Employee Name="Shakshi Agrawal" Comp="55 Technology" City="Jaipur" DeptName="Software Dev"/>
      <Count initialCount={10}/>
    </div>
  );
}

export default App;
