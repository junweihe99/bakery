import Product from "./components/Product";
import Cart from "./components/Cart";

export default function Shop() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", flexWrap:"wrap"}}>
            <div className="ms-4" style={{display: "flex", flexWrap: "wrap", gap:"2rem"}}>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="ms-4">
                <Cart />
            </div>
        </div>
    )
}