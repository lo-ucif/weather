import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { WeatherProvider } from "./context/metéo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WeatherProvider>
    {" "}
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </WeatherProvider>,
);
