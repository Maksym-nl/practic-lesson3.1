import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
// import './index.css';
import App from "./App";
const theme = {
  colors: {
    black: "#212121",
    white: "#fff",
    red: "red",
    green: "green",
    orange: "orange",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  spacing: (value) => `${value * 4}px`,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
