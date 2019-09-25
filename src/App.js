import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

//Navigation Pages
import Index from "./components/index/Index";
import Verdensballetten from "./components/verdensballetten/Verdensballetten";
import News from "./components/news/News";
import Events from "./components/events/Events";
import Gaester from "./components/gaester/Gaester";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Webshop from "./components/webshop/Webshop";
import ActivityContextProvider from './context/ActivityContext';
import ArticleContextProvider from './context/ArticleContext';

function App() {
  return (
    <div>
      <div className="App container">
        <div className="margin">
          <BrowserRouter>
            <Header />
            <ArticleContextProvider>
              <ActivityContextProvider>
                <Route exact path="/" component={Index} />
                <Route path="/verdensballetten" component={Verdensballetten} />
                <Route path="/news" component={News} />
                <Route path="/events" component={Events} />
                <Route path="/gaester" component={Gaester} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/webshop" component={Webshop} />
              </ActivityContextProvider>
            </ArticleContextProvider>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
