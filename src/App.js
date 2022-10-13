import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import ENSIBS from "./SVG/Vannes/ENSIBS/ENSIBS";
import Lorient from "./Lorient";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<ENSIBS/>}/>
          <Route exact path='/vannes' element={<ENSIBS/>}/>
          <Route exact path='/lorient' element={<Lorient/>}/>
          <Route path='/admin' component={() => {
              window.location.href = 'https://www.superlogout.com';
              return null;
          }}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
