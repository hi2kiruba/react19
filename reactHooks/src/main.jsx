import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
*createRoot from react-dom/client:
Used to create a root React application container.
Replaces the older ReactDOM.render() (deprecated in React 18).
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
