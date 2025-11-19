import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./backend/server.js";
createRoot(document.getElementById("root")).render(<App />);
