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

function FavoriteColors({favs, removeFromFavorites}) {
  return (
    <div style={favColStyle}>
        {favs.map((color, idx) => <Color color={color} key={idx} handleClick={removeFromFavorites}/>)}
    </div>
  )
}
export default FavoriteColors