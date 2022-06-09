import { Card } from "react-bootstrap";
import eggTart from "../pics/egg-tart.jpg";

export default function Product() {
  return (
    <Card className="mx-auto" style={{ width: "20rem", marginTop: "3rem", border: "0px solid yellow", boxShadow:"0px 0px 5px 10px black"}}>
            <Card.Img src={eggTart} />
            <Card.Body className="text-center" style={{background:"yellow", fontWeight: "bold"}}>Egg Tarts - $1.49 ea</Card.Body>
    </Card>
  )
}
