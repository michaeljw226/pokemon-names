import axios from 'axios'
import React, { useState } from 'react';


const Pokemon = (props) => {
    const [pokeList, setPokeList] = useState([])

    const getPokemon = () => {


        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {
                setPokeList(res.data.results);
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick={getPokemon}>
                Fetch Em All
            </button>
            <ul>
                {pokeList.length > 0 && pokeList.map((pokemon, idx) => {
                    return (
                        <li key={idx}> {idx + 1}-{pokemon.name} </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Pokemon