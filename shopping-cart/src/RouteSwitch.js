import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App />}/>
            <Route path ="/Shop" element={<Shop />}/>
        </Routes>
    </BrowserRouter>
  )
}