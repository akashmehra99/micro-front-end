import React from "react";
import "../src/index.scss";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";

const ToDoLib = (): JSX.Element => {
  return (
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  );
};

export default ToDoLib;
