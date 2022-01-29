import react, {useState} from "react";
import './App.css';
import Jelovnik from "./Jelovnik"

function App() {
  const [kalorije, setKalorije]= useState(1500);// i ovo bi valjalo izuciti 
  const [obrokInfo, setObrokInfo]=useState(null);
  
  function promeni(e){
    setKalorije(e.target.value); // zasto i kako ovo funkcionise
  }

  function poveziAPI(){
    fetch(` https://api.spoonacular.com/mealplanner/generate?apiKey=5f24491d72ff455c9d6503a8509b0d89&timeFrame=day&targetCalories=${kalorije}`)
    
    .then((response) => response.json())
    .then((data) => {setObrokInfo(data); console.log(data); }) 

    .catch(() => {console.log("Greska prilikom ucitavanja")});
   }

  return (
    <div className="App">
    <input type="number" placeholder="broj kalorija" onChange={promeni}></input>
    <button id="trazi" onClick={poveziAPI}>Pretrazi</button>

    {obrokInfo && <Jelovnik obrokInfo={obrokInfo} />} 

  </div>
  );
}

export default App;
