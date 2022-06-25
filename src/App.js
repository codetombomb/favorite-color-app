import "./App.css";
import FavoriteColors from "./components/FavoriteColors";
import AllColors from "./components/AllColors";
import { useState, useEffect } from "react";

// const COLORS = [
//   { color: "yellow", id: 1 },
//   { color: "red", id: 2 },
//   { color: "blue", id: 3 },
//   { color: "green", id: 4 },
//   { color: "purple", id: 5 },
//   { color: "yellowgreen", id: 6 },
//   { color: "gold", id: 7 },
// ];

function App() {

  const [colors, setColors] = useState([])
  const [favoriteColors, setFavoriteColors] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/colors")
    .then(resp => resp.json())
    .then(function(data){
      setColors([...data])
    })
  }, [])

  function addFavoriteColor(color){
    const newList = [...favoriteColors, color]
    setFavoriteColors(newList)
  }

  function removeFromFavorites(color){
    const newList = favoriteColors.filter(col => col !== color)
    setFavoriteColors(newList)
  }

  return (
    <div className="container">
      <FavoriteColors favs={favoriteColors} removeFromFavorites={removeFromFavorites}/>
      <hr />
      <AllColors colors={colors} addFavoriteColor={addFavoriteColor}/>
    </div>
  );
}

export default App;
