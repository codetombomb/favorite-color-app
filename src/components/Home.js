import FavoriteColors from "./FavoriteColors";
import AllColors from "./AllColors";
import {useState, useEffect} from 'react'


const numbers = [1,2,3,4,5,6,7,8,9,10]

function Home() {
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
    <div>
      <FavoriteColors // FavoriteColors({favorites: [...], numbers: [1,2,3,4,5,6,7,8,9,10]})
        favorites={favoriteColors}
        removeFromFavorites={removeFromFavorites}
        numbers={numbers}
      />
      <hr />
      <AllColors colors={colors} addFavoriteColor={addFavoriteColor} />
    </div>
  );
}
export default Home;
