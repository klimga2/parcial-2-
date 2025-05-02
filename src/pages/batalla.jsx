import { useEffect, useState } from "react";
import Cards from "../components/Card";
import { useParams, Link, useNavigate } from "react-router-dom";
import Pelea from "../components/Pelea";

function Batalla() {
  const Naveg = useNavigate();
  const Pokemonelegifo = useParams();

  const [DataPokemons, setDataPokemos] = useState("");
  const [PokemonJugador, setPokemonJugador] = useState("");

  const [StatsHp, setStastHp] = useState();
  const [StatsAtaque, setStatsAtaque] = useState();
  const [StatsJugadorHp, setStatsJugadorHp] = useState();
  const [StatsJugadorAtaque, setStatsJugadorAtaque] = useState();
  const [Imput, setImput] = useState("");

  const [Turno, setTurno] = useState(false);
  const [MostrarGanador, setMostrarGanador] = useState(true);
  const [loading, setloading] = useState(true);

  const [PokemonGandor, setPokemonGanador] = useState();
  const [PokemonesGandores, setPokemonesGandores] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemonelegifo.Pokemonelegifo}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonJugador(data);
        setStatsJugadorHp(data.stats[0].base_stat);
        setStatsJugadorAtaque(data.stats[1].base_stat);
      });
  }, []);

  useEffect(() => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1025)}`)
      .then((res) => res.json())
      .then((data) => {
        setDataPokemos(data);
        setStastHp(data.stats[0].base_stat);
        setStatsAtaque(data.stats[1].base_stat);
        setloading(false);
      });
  }, [Imput]);

  const MulticadorDeAtake = 0.5;

  function AtaqueMipokemon() {
    const AtaqueNuevo = StatsJugadorAtaque * MulticadorDeAtake;

    const NuevoHp = StatsHp - AtaqueNuevo;

    setStastHp(NuevoHp);
    setTurno(true);
  }

  function AtaquePokemonEnemigo() {
    const AtaqueNuevo = StatsAtaque * MulticadorDeAtake;

    const NuevoHp = StatsJugadorHp - AtaqueNuevo;

    setStatsJugadorHp(NuevoHp);
    setTurno(false);
  }

  if (StatsHp <= 0) {
    setPokemonGanador(PokemonJugador);
    setStastHp(DataPokemons.stats[0].base_stat);
    setMostrarGanador(false);
  }
  if (StatsJugadorHp <= 0) {
    setPokemonGanador(DataPokemons);
    setStatsJugadorHp(PokemonJugador.stats[0].base_stat);
    setMostrarGanador(false);
  }
  const tu = [];
  function guardar() {
    setPokemonesGandores(tu.push(PokemonGandor));
    console.log(tu);
    localStorage.setItem("Ganadores", JSON.stringify(tu));
    Naveg("/Ranking");
  }

  const input = (e) => {
    setImput(e.target.value);
  };
  const TraerPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Imput}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonJugador(data);
        setStatsJugadorHp(data.stats[0].base_stat);
        setStatsJugadorAtaque(data.stats[1].base_stat);

        setMostrarGanador(true);
        setTurno(false);
      });
  };

  return (
    <>
      {!MostrarGanador ? (
        <div>
          <p>Ganador</p>
          <Pelea
            img={PokemonGandor.sprites?.front_default}
            Pokemon={PokemonGandor.name}
            Hp={PokemonGandor.stats[0].base_stat}
            Ataque={PokemonGandor.stats[1].base_stat}
          />
          <button onClick={guardar}>Ranking</button>

          <div>
            <input type="text" value={Imput} onChange={input} />
            <button onClick={TraerPokemon}>Traer Pokemon</button>
          </div>
        </div>
      ) : (
        <section>
          {loading ? (
            <p>Loading</p>
          ) : (
            <div>
              <div>
                <p>Tu Pokemon</p>

                <Pelea
                  Hp={StatsJugadorHp}
                  Ataque={StatsJugadorAtaque}
                  img={PokemonJugador.sprites?.front_default}
                  Pokemon={PokemonJugador.name}
                />
                {!Turno ? (
                  <button onClick={AtaqueMipokemon}>atacar</button>
                ) : (
                  <p>Turno del enemigo</p>
                )}
              </div>
              <div>
                <p>Pokemon enemigo</p>

                <Pelea
                  Hp={StatsHp}
                  Ataque={StatsAtaque}
                  img={DataPokemons.sprites.front_default}
                  Pokemon={DataPokemons.name}
                />
                {Turno ? (
                  <button onClick={AtaquePokemonEnemigo}>atacar</button>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
export default Batalla;
