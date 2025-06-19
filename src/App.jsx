import "./App.css";
import { Routes, Route } from "react-router-dom";
import AccueilPizza from "./pages/AccueilPizza/AccueilPizza";
import Layout from "./layout/Layout";
import Ingredients from "./pages/Ingredients/Ingredients";
import Validation from "./pages/Commande/Commande";
import Remerciement from "./pages/ThankCommande/ThankCommande";
import DetailsCommande from "./pages/Commande/Commande";
import MerciCommande from "./pages/ThankCommande/ThankCommande";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AccueilPizza />} />
          <Route path="/:id" element={<Ingredients />} />
          <Route path="/validation" element={<DetailsCommande />}/>
          <Route path="/remerciement" element={<MerciCommande />} />
        </Route>
      </Routes>
    </>
  );
}
