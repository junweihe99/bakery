import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';

function App() {
  return (
    <BrowserRouter>
      <Navbar className="py-4" style={{background: "yellow", color: "black", boxShadow:"0px 2px 5px 5px black"}}>
        <Container>
            <Navbar.Brand>J's Bakery</Navbar.Brand>
            <Nav variant="pills">
              <Nav.Link href="/shopping-cart" style={{color: "black"}}>Home</Nav.Link>
              <Nav.Link href="/shopping-cart/Shop" style={{color: "black"}}>Shop</Nav.Link>
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