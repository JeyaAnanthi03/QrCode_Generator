import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import { QrCode } from "./components/QrCode";
import "./components/QrCode.css";
// import { UserCard } from "./UserCard";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <QrCode />
  </StrictMode>
);
