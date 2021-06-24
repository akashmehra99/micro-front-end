import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import "../src/index.scss";

const ToDoApp = (): JSX.Element => {
  return (
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<ToDoApp />, document.getElementById("root"));
