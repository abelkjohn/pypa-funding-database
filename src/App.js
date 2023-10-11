import './App.css';
import Header from "./Components/GeneralInfo/Header"
import Churches from "./Components/GeneralInfo/Churches"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChurchLocation from './Components/SpecificChurchInfo/ChurchLocation';



function App() {

  return (
    <BrowserRouter>
      <div id='app' className="App">
          <Routes>
            <Route path='/' element={<><Header /><Churches /></>} />
            <Route path='/:listID' element={<ChurchLocation />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
