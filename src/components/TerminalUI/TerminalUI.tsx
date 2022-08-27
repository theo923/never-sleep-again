import React, { useEffect, useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { WELCOME_TEXT } from "src/constants/TerminalUIConstants";
import styles from "./TerminalUI.module.scss";

interface Props {
  log: string[];
}

const TerminalUI: React.FC<Props> = ({ log }) => {
  return (
    <div className={styles.size}>
      <Terminal name="Log" colorMode={ColorMode.Light}>
        <TerminalOutput>{WELCOME_TEXT}</TerminalOutput>
        {log.map((item, idx) => (
          <TerminalOutput key={"message" + idx}>{item}</TerminalOutput>
        ))}
      </Terminal>
    </div>
  );
};

export default TerminalUI;
