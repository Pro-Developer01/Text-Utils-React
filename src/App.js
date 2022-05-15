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
  const [pellet,setpellet]= useState ('primary')

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
  var Togglemode_green=()=>
  {
    if(Mode==='light')
    {
      setMode('dark');
      setpellet('success');
      document.body.style.background=" #082308"
      Notification(" Green Dark Mode is Enabled","success");
      document.title="Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      setpellet('primary');
      document.body.style.background="white"
      Notification("Light Mode is Enabled","success");
      document.title="Text Utils - Light Mode";
    }
  }
  var Togglemode_blue=()=>
  {
    if(Mode==='light')
    {
      setMode('dark');
      setpellet('info');
      document.body.style.background=" #310432"
      Notification(" Violet Dark Mode is Enabled","success");
      document.title="Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      setpellet('primary');
      document.body.style.background="white"
      Notification("Light Mode is Enabled","success");
      document.title="Text Utils - Light Mode";
    }
  }
  var Togglemode_red=()=>
  {
    if(Mode==='light')
    {
      setMode('dark');
      setpellet('danger');
      document.body.style.background=" #580404"
      Notification(" Red Dark Mode is Enabled","success");
      document.title="Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      setpellet('primary');
      document.body.style.background="white"
      Notification("Light Mode is Enabled","success");
      document.title="Text Utils - Light Mode";
    }
  }
  var Togglemode_yellow=()=>
  {
    if(Mode==='light')
    {
      setMode('dark');
      setpellet('warning');
      document.body.style.background=" #673200"
      Notification(" Yellow Dark Mode is Enabled","success");
      document.title="Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      setpellet('primary');
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
    <DarkModeToggle togglemode={Togglemode} togglemode_green={Togglemode_green} togglemode_red={Togglemode_red}togglemode_blue={Togglemode_blue} togglemode_yellow={Togglemode_yellow} modetogglex={Mode}/>
    
    <Routes >
          <Route exact path="/about" element={<About mode={Mode}/>}>
          </Route>
           <Route exact path='/' element={<Textform mode={Mode} heading="Enter Text Below" pellet={pellet} Notification={Notification}/>} >
          </Route>
        </Routes>
        </Router>
        <Footer mode={Mode}/>
    </>

    
  );
}

export default App;
