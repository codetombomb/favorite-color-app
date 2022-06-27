import "./App.css";
import FavoriteColors from "./components/FavoriteColors";
import AllColors from "./components/AllColors";
import { useState, useEffect } from "react";

function App() {
  const [colors, setColors] = useState([]);
  const [favoriteColors, setFavoriteColors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/colors")
      .then((resp) => resp.json())
      .then(function (data) {
        setColors([...data]);
      });
  }, []);

  function addFavoriteColor(color) {
    if (favoriteColors.find((colData) => colData.id === color.id)) {
      alert("Cannot add duplicate color!");
    } else {
      const newList = [...favoriteColors, color];
      setFavoriteColors(newList);
    }
  }

  function removeFromFavorites(color) {
    const newList = favoriteColors.filter((col) => col !== color);
    setFavoriteColors(newList);
  }

  return (
    <div className="container">
      <FavoriteColors
        favs={favoriteColors}
        removeFromFavorites={removeFromFavorites}
      />
      <hr />
      <AllColors colors={colors} addFavoriteColor={addFavoriteColor} />
    </div>
  );
}

export default App;
