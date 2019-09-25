import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

//Navigation Pages
import Index from "./components/index/Index";
import Verdensballetten from "./components/verdensballetten/Verdensballetten";
import ArticlePage from "./components/news/ArticlePage";
import Events from "./components/events/Events";
import Gaester from "./components/gaester/Gaester";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Webshop from "./components/webshop/Webshop";

//Context
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
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route path="/verdensballetten" component={Verdensballetten} />
                  <Route exact path="/news" component={ArticlePage} />
                  <Route path="/article/:id" component={ArticlePage} />
                  <Route path="/events" component={Events} />
                  <Route path="/gaester" component={Gaester} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/webshop" component={Webshop} />
                </Switch>
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
