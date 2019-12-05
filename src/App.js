import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Content from "./Components/Content/Content";
import Legal from "./Components/Legal/Legal";
import About from "./Components/About/About";
import Brand from "./Components/Brand/Brand";
import SlaidBar from "./Components/SlaidBar/SlaidBar";
import Footer from "./Components/Footer/Footer";
import PhotoReport from "./Components/PhotoReport/PhotoReport";
import Questions from "./Components/Questions/Questions";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Brand/>
              <div className="container">

                  <SlaidBar/>

                  <Route path ="/Content" component={Content}/>
                  <Route path ="/Legal" component={Legal}/>
                  <Route path ="/About" component={About}/>
                  <Route path ="/PhotoReport" component={PhotoReport} />
                  <Route path ="/Questions" component={Questions} />

              </div>

          </div>
          <Footer/>
      </BrowserRouter>

  );
}

export default App;
