import './App.css';
import Header from "./Components/Header"
import Churches from "./Components/Churches"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChurchLocation from './Components/ChurchLocation';



function App() {

  
  return (
    <BrowserRouter>
      <div id='app' className="App">
        <Header />
          <Routes>
          <Route path='/' element={<Churches />} />
          <Route path='/:listID' element={<ChurchLocation />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
