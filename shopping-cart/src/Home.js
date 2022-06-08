import { Image, Button } from "react-bootstrap";
import eggTart from "./pics/egg-tart.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
  return (
    <>
        <div className="my-5" style={{display: "flex", justifyContent:"center"}}>
            <Image src={eggTart} roundedCircle style={{display: "flex", border: "3px solid yellow", boxShadow:"0px 0px 5px 10px black"}}></Image>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
            <Button className="px-4" style={{background:"black", color:"yellow", boxShadow:"5px 10px yellow"}} onClick={() => navigate('/shopping-cart/Shop')}>Buy Now</Button>
        </div>
    </>
  )
}
