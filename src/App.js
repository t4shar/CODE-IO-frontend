import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch,Route,Link, Routes
} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Editorpage from './Components/Home/Editorpage';
import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';
import Codes from './Components/Mycodes/Codes';


function App() {
  const [logitrue, setlogitrue] = useState(true);

  return (
    <>
      <Router>
          <Navbar logitrue/>
        <Routes>
          <Route path="/" element={<Editorpage/>}> </Route>
          <Route path="/mycodes" element={<Codes/>}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
