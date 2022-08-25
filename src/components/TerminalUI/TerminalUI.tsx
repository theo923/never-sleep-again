import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import styles from "./TerminalUI.module.scss";

const TerminalUI = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>,
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className={styles.size}>
      <Terminal
        name="Log"
        colorMode={ColorMode.Light}
        onInput={(terminalInput) =>
          console.log(`New terminal input received: '${terminalInput}'`)
        }
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalUI;
