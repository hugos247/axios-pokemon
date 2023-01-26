import { useState } from "react";
import axios from "axios";


const FetchPokemon = () => {

  const [data, setData] = useState([]);

    const fetchData = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.data)
      .then(response => setData(response.results))
    };
    

    //     const fetchPokemon = () => {
		//     fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
		// 	    .then(response => response.json())
		// 	    .then(response => setData(response.results))
    // };

  return (

    <>
        <button onClick={ fetchData }>Fetch Pokemon</button>

        <ul>
          { data.map((element, index) => {
            return (
              <li key= { index }>{element.name }</li>   
            )
          })}
          

        </ul>

    </>
  )
}

export default FetchPokemon