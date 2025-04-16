import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
