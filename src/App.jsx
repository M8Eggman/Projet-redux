import "./App.css";
import { Routes, Route } from "react-router-dom";
import AccueilPizza from "./pages/AccueilPizza/AccueilPizza";
import Layout from "./layout/Layout";
import Ingredients from "./pages/Ingredients/Ingredients";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AccueilPizza />} />
          <Route path="/:id" element={<Ingredients />} />
          <Route path="/validation" />
          <Route path="/remerciement" />
        </Route>
      </Routes>
    </>
  );
}
