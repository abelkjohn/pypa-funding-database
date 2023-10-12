import './App.css';
import Churches from "./Components/GeneralInfo/Churches"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChurchLocation from './Components/SpecificChurchInfo/ChurchLocation';
import MainPassword from './Components/GeneralInfo/MainPassword';
import React from 'react';



function App() {
  const [ authenticated, setAuthenticated ] = React.useState(false)

  return (
    <BrowserRouter>
      <div id='app' className="App">
          <Routes>
            <Route path='/' element={<><Churches auth={authenticated}/></>} />
            <Route path='/:listID' element={<ChurchLocation auth={authenticated}/>}/>
            <Route path='/login' element={<MainPassword word={i => setAuthenticated(i)} auth={authenticated}/>}/>     
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
