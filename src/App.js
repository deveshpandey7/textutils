
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
          setTimeout(() =>{
            setAlert(null);
          }, 1500)
             
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode' // gmail no of unread msg can be done like this or a tareeka

      // setInterval(() =>{ // website name flickering can be done like this
      //   document.title = 'Textutils is amazing';
      // }, 2000)

      // setInterval(() =>{
      //   document.title = ' Install Textutils now';
      // }, 1500)

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode'
    }
  }

  return (
  <>
    <Router>
    <Navbar title="Textutils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my=3">

  <Routes>
    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter The Text to Display here..." mode={mode}/>}/>
    <Route exact path="/about" element={<About mode={mode}n/>} />
  </Routes>
   
   
    </div>   
    </Router>
  </>
  
  );
  
}

export default App;
