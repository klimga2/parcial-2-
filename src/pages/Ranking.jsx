import { useEffect, useState } from "react";

function Ranking() {
  const [Lista, setLista] = useState();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const Gadores = JSON.parse(localStorage.getItem("Ganadores"));
    setLista(Gadores);
    setLoading(false);
  }, []);
  console.log(Lista);
  return (
    <>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            src={Lista[0].sprites.front_default}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <h1>{Lista[0].name}</h1>
        </div>
      )}
    </>
  );
}

export default Ranking;
