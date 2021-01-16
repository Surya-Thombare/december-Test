import React, { Component } from "react";
import List from "./listCocktail";
import { CardDeck } from "reactstrap";



const cocktail = ({ cocktail, mode = "trending", ...restprops }) => {
  if (cocktail !== undefined) {
    console.log(cocktail);
    return (
      <CardDeck
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
          <h1>HEllo world</h1>
        {cocktail.map((data) => (
          <List key={data.idDrink} data={data}  mode={mode} />
        ))}
      </CardDeck>
    );
  } else {
    return (
      <div className="sweet-loading">
        <h1>ERROR</h1>
      </div>
    );
  }
};


export default cocktail;