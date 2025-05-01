import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Batalla from "../pages/batalla";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batalla/:Pokemonelegifo" element={<Batalla />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
