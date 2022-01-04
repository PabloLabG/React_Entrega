import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TableMUI } from "./table.mui";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { OrganizationContextProvider } from "./context/organization-context-provider";

export const App = () => {
  return (
    <OrganizationContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TableMUI organization="lemoncode" />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </OrganizationContextProvider>
  );
};
