import React from "react"


function Color({color, handleClick}) {
    const colorStyle = {
        width: '80px',
        height: '80px',
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: color.color
    }
    return (
    <div style={colorStyle} onClick={()=> handleClick(color)}></div>
  )
}
export default Color