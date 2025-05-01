import { useEffect, useState } from "react";
import Cards from "../components/Card";
import { useNavigate } from "react-router-dom";
function Home() {
  const Naveg = useNavigate();
  const [DataPokemons, setDataPokemos] = useState("hola");
  console.log(DataPokemons);

  const [Imput, setImput] = useState("");
  const [loading, setloading] = useState(true);
  const [Stats, setStast] = useState();

  const input = (e) => {
    setImput(e.target.value);
  };

  const TraerPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Imput}`)
      .then((res) => res.json())
      .then((data) => {
        setDataPokemos(data);
        setStast(data.stats);
        console.log(data);
        setloading(false);
      });
  };
  const PasarPaguina = () => {
    Naveg(`/batalla/${Imput}`);
  };

  return (
    <>
      <input type="text" value={Imput} onChange={input} />
      <button onClick={TraerPokemon}>Traer Pokemon</button>

      {loading ? (
        <p>Seleciona a un pokemon</p>
      ) : (
        <div>
          <Cards
            img={DataPokemons.sprites.front_default}
            nombre={DataPokemons.name}
            Stats={Stats}
          />
          <button onClick={PasarPaguina}>Guardar pokemon</button>
        </div>
      )}
    </>
  );
}
export default Home;
