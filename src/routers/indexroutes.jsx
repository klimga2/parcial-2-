import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Batalla from "../pages/batalla";
import Ranking from "../pages/Ranking";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batalla/:Pokemonelegifo" element={<Batalla />} />
        <Route path="/Ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
