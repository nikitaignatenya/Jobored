import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Vacancy from "./pages/Vacancy.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/vacancy/:id" element={<Vacancy />} />
      </Routes>
    </>
  );
}

export default App;
