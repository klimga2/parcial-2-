function Pelea({ Hp, Ataque, img, Pokemon }) {
  return (
    <>
      <img src={img} alt="" style={{ width: "200px", height: "200px" }} />
      <h1>{Pokemon}</h1>
      <p>Hp: {Hp}</p>
      <p>Ataque: {Ataque}</p>
    </>
  );
}

export default Pelea;
