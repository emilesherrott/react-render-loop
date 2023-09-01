import React from "react"
import Beer from "../BeerDrink"

const BeerDisplay = ({ beers }) => {
  return (
    <section>
      {beers.map((beer, i) => (
        <Beer beer={beer} key={i} />
      ))}
    </section>
  )
}

export default BeerDisplay
