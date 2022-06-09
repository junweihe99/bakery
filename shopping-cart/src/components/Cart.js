import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Cart() {
  const [amount, setAmount] = useState(0);

  let cost = amount*1.49;

  function incrementAmount(){
    setAmount(currAmount => currAmount + 1);
  }

  function decrementAmount(){
    if(amount>0)
    {
      setAmount(currAmount => currAmount - 1);
    }
  }

  function clearAmount(){
    setAmount(currAmount => 0);
  }

  return (
    <div className="me-5" style={{width: "30rem", marginTop: "3rem", border: "0px solid yellow", boxShadow:"0px 0px 5px 10px black", display: "flex", flexDirection:"column"}}>
        <div className="text-center" style={{background: "yellow", padding: "1rem"}}>CheckOut</div>
        <div className="my-4" style={{display: "flex", justifyContent:"space-around", alignItems:"center", flex:"1"}}>
            <div>EggTarts</div>
            <div style={{display: "flex", gap:"1rem", alignItems:"center"}}>
                <Button onClick={incrementAmount}>+</Button>
                <div>{amount}</div>
                <Button onClick={decrementAmount}>-</Button>
                <Button variant="danger" onClick={clearAmount}>X</Button>
            </div>
        </div>
        <div style={{display: "flex", justifyContent:"space-between", background:"yellow", padding:"1rem"}}>
            <div>Total</div>
            <div>$ {cost}</div>
        </div>
    </div>
  )
}
