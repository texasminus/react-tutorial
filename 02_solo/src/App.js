import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";


function App(){
  const cards = data.map((card)=>{
    return (
      <Card 
        card={card}
      />
    )
  })

  return (
    <div className="body">
      <Navbar />
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}

export default App