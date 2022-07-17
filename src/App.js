import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Switch,Route,Link, Routes
} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Editorpage from './Components/Home/Editorpage';
import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Router>
          {/* <Navbar/> */}
        <Routes>
          
          <Route path="/" element={<LoginForm/>}> </Route>
          <Route path="/signup" element={<SignupForm/>}> </Route>
          <Route path="/editor" element={<Editorpage/>}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
