import Product from "./components/Product";

export default function Shop( {handleClick} ) {
    return (
        <Product handleClick={handleClick} style={{minHeight:"100vh"}}/>
    )
}