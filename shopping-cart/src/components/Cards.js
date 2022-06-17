import { Card, Button } from "react-bootstrap";

export default function Cards({ item, handleClick }) {
  const {id, title, price, img} = item;
  return (
    <Card className="mx-auto" style={{ width: "18rem", marginTop: "3rem", border: "0px solid yellow", boxShadow:"0px 0px 5px 10px black"}}>
            <Card.Img src={img} style={{objectFit:"cover", width:"18rem", height: "18rem"}}/>
            <Card.Body className="text-center" style={{background:"yellow", fontWeight: "bold"}}>{title}  -  ${price} ea</Card.Body>
            <Button variant="danger" onClick={handleClick}>Add to Cart</Button>
    </Card>
  )
}
