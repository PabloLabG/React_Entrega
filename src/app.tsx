import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TableMUI } from "./table.mui";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { OrganizationContextProvider } from "./context/organization-context-provider";
import { ListRickMorty } from "./components/list-rick";
import { DetailRickPage } from "./components/characters-rick/detail-rick";

export const App = () => {
  return (
    <OrganizationContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TableMUI organization="lemoncode" />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/rickmorty" element={<ListRickMorty />} />
          <Route path="/rickmorty/character/:id" element={<DetailRickPage />} />
        </Routes>
      </Router>
    </OrganizationContextProvider>
  );
};
