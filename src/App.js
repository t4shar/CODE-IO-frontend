import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,Route, Routes
} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Editorpage from './Components/Home/Editorpage';
import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';
import Codes from './Components/Mycodes/Codes';
import Codestate from './Context/Codes/Codestate';


function App() {
  const [logintrue, setlogintrue] = useState('true');


  return (
    <>
    <Codestate>
      <Router>
          <Navbar logintrue = {logintrue} />
        <Routes>
          <Route path="/" element={<Editorpage/>}> </Route>
          <Route path="/login" element={<LoginForm/>}> </Route>
          <Route path="/signup" element={<SignupForm/>}> </Route>
          <Route path="/mycodes" element={<Codes/>}> </Route>
        </Routes>
      </Router>
    </Codestate>
    </>
  );
}

export default App;
