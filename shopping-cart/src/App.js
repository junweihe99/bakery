import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Header from './components/Header';
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

    const handleClick = (item) => {
      if(cart.indexOf(item) !== -1) {
        return;
      }
      setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
      const index = cart.indexOf(item);
      const arr = cart;
      arr[index].amount +=d;

      if(arr[index].amount===0){
        arr[index].amount=1;
      }
      setCart([...arr]);
    };

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route path ="/shopping-cart" element={<Home />}/>
          <Route path ="/shopping-cart/Shop" element={<Shop handleClick={handleClick}/>}/>
          <Route path ="/shopping-cart/Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;