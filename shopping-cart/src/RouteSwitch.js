import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/shopping-cart/" element={<App />}/>
            <Route path ="/shopping-cart/Shop" element={<Shop />}/>
        </Routes>
    </BrowserRouter>
  )
}