// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import Header from './components/Header/header';
import NavTabs from './components/NavBar/NavTabs';
import Home from './components/NavBar/pages/Me';
import About from './components/NavBar/pages/About';
import Blog from './components/NavBar/pages/Blog';
import Contact from './components/NavBar/pages/Contact';
import Contacts from "./components/Contacts/Contacts";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// CSS
import './assets/styles.css'


function App() {
  return <>
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>

        <Router>
          <Col md="2" lg="2">
            <NavTabs />
          </Col>
          {/* Wrap Route elements in a Routes component */}
          <Col md="9" lg="9">

            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}

              <Route exact path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              {/* Define a route that will have descendant routes */}
              <Route path="contact/*" element={<Contact />} />
            </Routes>

          </Col>
        </Router>
        <Col md="1" lg="1">
          <Contacts />
        </Col>
      </Row>
    </Container>
  </>;
}

export default App;
