import "./App.css";
import { Routes, Route } from "react-router-dom";
import AccueilPizza from "./pages/AccueilPizza/AccueilPizza";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<AccueilPizza />} />
          {/* <Route path="/:custom" element />
          <Route path="/validation" element />
          <Route path="/remerciement" element /> */}
        </Route>
      </Routes>
    </>
  );
}
