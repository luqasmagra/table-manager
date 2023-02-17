import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

import styles from "./App.module.css";

function Layout() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Outlet />
    </div>
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
