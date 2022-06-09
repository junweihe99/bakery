import Product from "./components/Product";
import Cart from "./components/Cart";

export default function Shop() {
    return (
        <div style={{display: "flex"}}>
            <Product />
            <Cart />
        </div>
    )
}