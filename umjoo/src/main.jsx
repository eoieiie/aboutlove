import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import PhotoPage from "./pages/PhotoPage";
import MyPage from "./pages/MyPage";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {" "}
          {/* App 안에 Navbar 등 공통 레이아웃 */}
          <Route index element={<Home />} />
          <Route path="photos/:date" element={<PhotoPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
