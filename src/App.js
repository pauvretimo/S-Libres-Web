import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import Vannes from "./Vannes";
import Lorient from "./Lorient";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/vannes' element={<Vannes/>}/>
          <Route exact path='/lorient' element={<Lorient/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
