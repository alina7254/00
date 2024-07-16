import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main.tsx";
import PageB from "../pages/PageB.tsx";
import PageA from "../pages/PageA.tsx";
import PageN from "../pages/PageN.tsx";
import PageS from "../pages/PageS.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/b" element={<PageB />} />
          <Route path="/a" element={<PageA />} />
          <Route path="/n" element={<PageN />} />
          <Route path="/s" element={<PageS />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
