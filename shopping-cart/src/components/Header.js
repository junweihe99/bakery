import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar className="py-4" style={{background: "yellow", color: "black", boxShadow:"0px 2px 5px 5px black"}}>
        <Container>
            <Button onClick={() => navigate('/shopping-cart')} style={{backgroundColor:"yellow", color:"black", border:"none"}}><Navbar.Brand>J's Bakery</Navbar.Brand></Button>
            <Nav variant="pills" style={{gap:"1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button onClick={() => navigate('/shopping-cart')} style={{backgroundColor:"yellow", color:"black", border:"none"}}>Home</Button>
              <Button onClick={() => navigate('/shopping-cart/Shop')} style={{backgroundColor:"yellow", color:"black", border:"none"}}>Menu</Button>
              <Button onClick={() => navigate('/shopping-cart/Cart')} style={{backgroundColor:"yellow", color:"black", border:"none"}}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Button>
            </Nav>
        </Container>
    </Navbar>
  )
}

