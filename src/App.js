import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = useState('light')
  const toggleDark = ()=>{
    if(darkMode==='light'){
      setDarkMode('dark')
      document.body.style.backgroundColor = '#313539';
      document.body.style.color = 'white';
    }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    <Navbar title="Text Utils" darkmode = {darkMode} toggleDark = {toggleDark}/>
    <Textform heading="Enter your Text here:"/>

    </>
  );
}

export default App;
