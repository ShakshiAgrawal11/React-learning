import Window from "./components/Window";


function App() {
  const props=[
    {
        id:1,
        title:"What is react?",
        desc:"React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. I"
    },
    {
        id:2,
        title:"Why is react so popular?",
        desc:"React is JS Library"
    },
    {
        id:3,
        title:"How to react react?",
        desc:"From google you can reacd react, there are many documnet giving information about it,so be ready to inculcate that informantion in your system"
    },

];
  return (
    <div >
      <h1>React Window</h1>
      <h3>Click on the question to see the answer</h3>
      <Window props={props} />
    </div>
  );
}

export default App;
