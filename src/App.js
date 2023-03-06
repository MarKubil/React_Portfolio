import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import NavTabs from './components/NavBar/NavTabs';
import Home from './components/NavBar/pages/Home';
import About from './components/NavBar/pages/About';
import Blog from './components/NavBar/pages/Blog';
import Contact from './components/NavBar/pages/Contact';


function App() {
  return <>
    <Header />
    <Router>
      <nav>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </nav>
    </Router>
    </> ;
}

export default App;