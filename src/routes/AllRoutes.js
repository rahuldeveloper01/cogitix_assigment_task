import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../container/pagas/layout/Layout";
import CharacterList from "../container/pagas/character/CharacterList";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character-list/:id" element={<CharacterList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
