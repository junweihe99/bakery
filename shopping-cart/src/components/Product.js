import list from "../data"
import Cards from "./Cards"
import { useState } from "react";

export default function Product( {handleClick} ) {
  return (
    <section className="mx-auto" style={{display: "grid", gridTemplateColumns:"repeat(3,1fr)", gridGap:"2rem"}}>
      {
        list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick}/>)
      )}
    </section>
  );
};
