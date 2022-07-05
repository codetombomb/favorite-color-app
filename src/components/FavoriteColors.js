import React from 'react'
import Color from './Color'

const favColStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    color: "white",
    height: "20vh"
}

function FavoriteColors({favorites, removeFromFavorites, numbers}) {
  return (
    <div style={favColStyle}>
      <h1> My Favorite Colors</h1>
        {favorites.map((color, idx) => <Color color={color} key={idx} handleClick={removeFromFavorites}/>)}
        <h1>My Favorite Numbers</h1>
        {numbers.map(num => <h1 key={num}>{num}</h1>)}
    </div>
  )
}
export default FavoriteColors