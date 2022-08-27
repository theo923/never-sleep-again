import { createContext, useState } from "react";
import "./App.scss";
import FrontPage from "src/components/FrontPage/FrontPage";
import TerminalUI from "./components/TerminalUI/TerminalUI";
import { request } from "src/scripts/request";

function App() {
  const [link, setLink] = useState<string>("");

  const {
    working,
    setWorking,
    log,
    timer,
  }: {
    working: boolean;
    setWorking: React.Dispatch<React.SetStateAction<boolean>>;
    log: string[];
    timer: number;
  } = request(link);

  return (
    <div>
      <FrontPage
        link={link}
        setLink={setLink}
        working={working}
        setWorking={setWorking}
        timer={timer}
      />
      <TerminalUI log={log} />
    </div>
  );
}

export default App;
