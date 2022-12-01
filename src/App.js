import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import ENSIBS from "./SVG/Vannes/ENSIBS/ENSIBS";
import DSEG from "./SVG/Vannes/DSEG/DSEG";
import Lorient from "./Lorient";
import NotFound from "./NotFound";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/vannes' element={<ENSIBS/>}/>
          <Route exact path='/lorient' element={<Lorient/>}/>
          <Route exact path='/dseg' element={<DSEG/>}/>
          <Route path='/admin' component={() => {
              window.location.href = 'https://superlogout.com';
              return null;
          }}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
