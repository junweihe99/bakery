import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
  return (
      <Navbar bg="light" variant="light" className="py-4">
          <Container>
              <Navbar.Brand>J's Bakery</Navbar.Brand>
              <Nav variant="pills">
                <Nav.Link href="/shopping-cart/">Home</Nav.Link>
                <Nav.Link href="/shopping-cart/Shop">Shop</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
  )
}