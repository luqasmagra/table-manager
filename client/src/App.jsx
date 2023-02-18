import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutPage from "./components/LayoutPage/LayoutPage";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Perfil from "./pages/Perfil/Perfil";

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
          <Route path="/mesa/:id" element={<Details />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </>
  );
}
