import { useEffect, useState } from "react";
import Cards from "../components/Card";
import { useParams } from "react-router-dom";
const Pokemonelegifo = useParams();
function Home() {
  const [DataPokemons, setDataPokemos] = useState("");
  console.log(DataPokemons);

  const [PokemonJugador, setPokemonJugador] = useState("");
  const [loading, setloading] = useState(true);
  const [Stats, setStast] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemonelegifo}`)
      .then((res) => res.json())
      .then((data) => {
        setDataPokemos(data);
        setStast(data.stats);
        console.log(data);
        setloading(false);
      });
  }, []);
  const input = (e) => {
    setImput(e.target.value);
  };

  const TraerPokemon = () => {};

  return (
    <>
      {loading ? (
        <p>Seleciona a un pokemon</p>
      ) : (
        <div>
          <Cards
            img={DataPokemons.sprites.front_default}
            nombre={DataPokemons.name}
            Stats={Stats}
          />
          <button>Guardar pokemon</button>
        </div>
      )}
    </>
  );
}
export default Home;
