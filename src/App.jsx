import "./App.css";
import { Routes, Route } from "react-router-dom";
import AccueilPizza from "./pages/AccueilPizza/AccueilPizza";
import Layout from "./layout/Layout";
import PizzaPanier from "./components/pizzaPanier/pizzaPanier";

export default function App() {
  return (
    <>
      <PizzaPanier />
    </>
  );
}
