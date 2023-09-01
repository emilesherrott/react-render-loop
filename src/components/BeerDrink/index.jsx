import React from 'react'

const BeerDrink = ({beer}) => {
  return (
    <article>
      <h3>{beer.name}</h3>
      <p className="beerdrink-tagline">{beer.tagline}</p>
      <p>{beer.description}</p>
    </article>
  )
}

export default BeerDrink