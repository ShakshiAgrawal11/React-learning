import Criteria from "./components/Criteria";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SevenWonders from "./components/SevenWonders";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/criteria" element={<Criteria/>}/>
        <Route path="/seven" element={<SevenWonders/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/demo/page" element={<div>This is demo page</div>}></Route>
        <Route exact path="/wall" element={<h1>This is Great Wall Of China</h1> }/>
        <Route exact path="/seven/wall" element={<h1>This is Great Wall Of China</h1> }/>
      </Routes>
    </Router>
  );
}

export default App;



//######################################################3


// import React, { Component } from 'react';
// import {
//   Route,
//   Link,
//   Navigate,
//   BrowserRouter as Router,
//   Routes,
// } from 'react-router-dom';

// const Login = () => (
//   <div> Login Page <button>login</button> </div>
// );

// const AuthService = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   logout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// };

// const Public = () => {
//   return <div>I am public</div>
// };
// const Private = () => {
//   return <div>I am private</div>
// }



// const SecretRoute = ({ component: Component, ...rest }) => (
//   <Routes>
//     <Route {...rest} render={(props) => (
//       AuthService.isAuthenticated === true
//         ? <Component {...props} />
//         : <Navigate to='/login' />
//     )} />
//   </Routes>

// );





// const App = () => {
//   return (
//     <Router>
//       <div style={{ width: 1000, margin: '0 auto' ,backgroundColor:"pink", position:"absolute",top:"6rem"}}>
//         <ul>
//           <li><Link to='/public'> Public </Link></li>
//           <li><Link to='/private'> Private </Link></li>
//         </ul>

//         <hr />
//         <Routes>
//           <Route path='/public' component={Public} />
//           <Route path='/login' component={Login} />
        
//         </Routes>
//         <SecretRoute path='/private' component={Private} />

//       </div>
//     </Router>
//   )
// }

// export default App

