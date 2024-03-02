import axios from "axios";
import { useEffect, useState } from "react";
import { colorByType } from "../constants/pokemon";

const PokemonPreview = ({ pokemonURL}) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() =>{
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err)=> console.log(err))
  }, [])

  return ( //No ejecuta los valores de border 
    <article className="text-center bg-white rounded-[30px] relative 
    font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border border:hover cursor-pointer">
      <header className="h-10">
        <img
          className="absolute right-12 -top-10 .group:hover pixelated"
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"]
              .front_default
          } 
          alt=""
        />
      </header>
      <span className="text-sm text-slate-400" >N° {pokemon?.id} </span>
      <h4 className="text-lg"> {pokemon?.name} </h4>
      <ul className="flex gap-5 justify-center">
        {pokemon?.types.map((type) => 
          (<li 
            className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type.type.name]}`}
            key={type.type.name}
          > 
            {type.type.name} 
          </li>
        ))}
      </ul>
    </article>
  )
};

export default PokemonPreview;