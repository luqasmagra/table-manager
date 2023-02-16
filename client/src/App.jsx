import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar/NavBar";

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
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
