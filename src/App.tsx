import { useState } from "react";
import "./App.scss";
import FrontPage from "src/components/FrontPage/FrontPage";
import TerminalUI from "./components/TerminalUI/TerminalUI";

function App() {
  return (
    <div>
      <FrontPage />
      <TerminalUI />
    </div>
  );
}

export default App;
