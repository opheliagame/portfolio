import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Card from './components/Card';
import Project from './components/Project';
import projects from './projects';
import Gallery from './components/Gallery';
import images from './images';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <Route path='/about' component={About} />

        {/* <Gallery oimages={images}/> */}
        <div className="cards-container">
          <Card title="my first shader!" tags="tags" image="/portfolio/logo192.png"/>
          <Card title="title" tags="tags" image="/portfolio/logo192.png"/>
          <Card title="title" tags="tags" image="/portfolio/logo192.png"/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
