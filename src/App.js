import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import DarkModeToggle from './Components/DarkModeToggle';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null)

  var Notification=(Message,type)=>
  {
    setalert(
      {
        msg: Message,
        type: type
      }
    )

    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  var Togglemode=()=>
  {
    if(Mode==='light')
    {
      setMode('dark');
      document.body.style.background=" #042743"
      Notification("Dark Mode is Enabled","success");
      document.title="Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.background="white"
      Notification("Light Mode is Enabled","success");
      document.title="Text Utils - Light Mode";
    }
  }
  
  return (
    <>
    <Router>
    <Navbar heading="Text Utils" mode={Mode}  />
    <Alert alertt={alert}/>
    <DarkModeToggle togglemode={Togglemode} modetogglex={Mode}/>
    
    <Routes >
          <Route exact path="/about" element={<About mode={Mode}/>}>
          </Route>
           <Route exact path='/' element={<Textform mode={Mode} heading="Enter Text Below" Notification={Notification}/>} >
          </Route>
        </Routes>
        </Router>
        <Footer mode={Mode}/>
    </>

    
  );
}

export default App;
