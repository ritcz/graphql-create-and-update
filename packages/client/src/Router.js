import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { ToDoPage } from "./pages/ToDoPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ToDoPage />} />
          <Route path="/todos">
            <Route index element={<ToDoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
