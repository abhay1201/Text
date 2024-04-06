import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode,setmode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
    setmode('Dark')
    }
    else{
      setmode('Light')
    }

  }
  return (
    <>
    
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container"> 
    <TextForm heading="Enter the Text to analyze"/> 
    </div>

    </>
  );
}

export default App;
