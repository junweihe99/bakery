import { Button } from "react-bootstrap";

export default function Cart() {
  return (
    <div className="me-5" style={{width: "30rem", marginTop: "3rem", border: "0px solid yellow", boxShadow:"0px 0px 5px 10px black", display: "flex", flexDirection:"column"}}>
        <div className="text-center" style={{background: "yellow", padding: "1rem"}}>CheckOut</div>
        <div className="my-4" style={{display: "flex", justifyContent:"space-around", alignItems:"center", flex:"1"}}>
            <div>EggTarts</div>
            <div style={{display: "flex", gap:"1rem", alignItems:"center"}}>
                <Button>+</Button>
                <div>0</div>
                <Button>-</Button>
            </div>
        </div>
        <div style={{display: "flex", justifyContent:"space-between", background:"yellow", padding:"1rem"}}>
            <div>Total</div>
            <div>Amt</div>
        </div>
    </div>
  )
}
