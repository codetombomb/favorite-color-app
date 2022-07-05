import "./App.css";
import FavoriteColors from "./components/FavoriteColors";
import AllColors from "./components/AllColors";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Home from "./components/Home"

const numbers = [1,2,3,4,5,6,7,8,9,10]

function App() {
  // const [colors, setColors] = useState([]);
  // const [favoriteColors, setFavoriteColors] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/colors")
  //     .then((resp) => resp.json())
  //     .then(function (data) {
  //       setColors([...data]);
  //     });
  // }, []);

  // function addFavoriteColor(color) {
  //   if (favoriteColors.find((colData) => colData.id === color.id)) {
  //     alert("Cannot add duplicate color!");
  //   } else {
  //     const newList = [...favoriteColors, color];
  //     setFavoriteColors(newList);
  //   }
  // }

  // function removeFromFavorites(color) {
  //   const newList = favoriteColors.filter((col) => col !== color);
  //   setFavoriteColors(newList);
  // }

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/home"  element={<Home />} />
      </Routes>

      {/* <FavoriteColors // FavoriteColors({favorites: [...], numbers: [1,2,3,4,5,6,7,8,9,10]})
        favorites={favoriteColors}
        removeFromFavorites={removeFromFavorites}
        numbers={numbers}
      />
      <hr />
      <AllColors colors={colors} addFavoriteColor={addFavoriteColor} /> */}
    </div>
  );
}

export default App;
