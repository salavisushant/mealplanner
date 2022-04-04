import { useState } from 'react';
import { MealList } from './components/MealList'
import { Button } from 'antd';
import "./App.css"

function App() {
   const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChange(e) {
    setCalories(e.target.value)
  }
  return (
    <div className="App">
      <div style={{display: 'flex',justifyContent:"space-between" }}>
          <img className="logo" src="https://user-images.githubusercontent.com/87421852/161563888-39b2fb90-b9db-4aa0-9cc9-e374b010ff78.png" alt="logo"/>
      <h1 style={{ color: "#390040",marginTop:"5%",marginRight:"38%" }}>Eat for fit with benifit</h1>
      </div>  
        <section className="controls">
        <input
          className="myinput"
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <Button style={{ width: "15%",fontSize: "1.2vw"}} type="primary" onClick={getMealData}>Get Daily Meal Plan</Button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
