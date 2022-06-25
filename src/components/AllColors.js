import React from "react"
import Color from "./Color"

const colorStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lightgreen",
    color: "black",
    height: "20vh"
}

function AllColors({colors, addFavoriteColor}) {
  return (
    <div style={colorStyle}>{colors.map((color, idx) => <Color color={color} key={idx} handleClick={addFavoriteColor}/>)}</div>
  )
}
export default AllColors