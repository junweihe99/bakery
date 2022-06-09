import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';

function App() {
  return (
    <BrowserRouter>
      <Navbar className="py-4" style={{background: "yellow", color: "black", boxShadow:"0px 2px 5px 5px black"}}>
        <Container>
            <a href="/shopping-cart" style={{textDecoration:"none"}}><Navbar.Brand>J's Bakery</Navbar.Brand></a>
            <Nav variant="pills" style={{gap:"1rem"}}>
              <a href="/shopping-cart" style={{color: "black", textDecoration:"none"}}>Home</a>
              <a href="/shopping-cart/Shop" style={{color: "black", textDecoration:"none"}}>Shop</a>
            </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path ="/shopping-cart" element={<Home />}/>
          <Route path ="/shopping-cart/Shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;