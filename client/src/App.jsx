import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutPage from "./components/LayoutPage/LayoutPage";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function Layout() {
  return (
    <LayoutPage>
      <Outlet />
    </LayoutPage>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}
