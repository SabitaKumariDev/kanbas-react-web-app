import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import JavaScript from './Labs/a3/JavaScript';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <HashRouter>
      <div>
        {/* <HelloWorld/>
         <Labs/>
         <Kanbas/>
         <JavaScript/>
         <h1>Hello World!</h1> */}
          <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
      </div>
     </HashRouter>
  );
}

export default App;
