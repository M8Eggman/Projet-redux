import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccueilPizza from "./pages/AccueilPizza/AccueilPizza";
import DetailsCommande from "./pages/DetailsCommande/DetailsCommande";
import MerciCommande from "./pages/MerciCommande/MerciCommande";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccueilPizza />} />
        <Route path="/details-commande" element={<DetailsCommande />} />
        <Route path="/merci-commande" element={<MerciCommande />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
