import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Index from "./components/index/Index";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Index}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
