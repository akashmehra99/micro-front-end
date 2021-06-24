import React from "react";
import { observer } from "mobx-react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { TodoList } from "./components/ToDoList";
import TodoAdd from "./components/ToDoAdd";
import "./App.scss";
import ToDoLib from "../node_modules/micro-todo-lib/src";

const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList />
        <TodoAdd />
      </Box>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <ToDoLib />
      </Box>
    </ChakraProvider>
  );
};

export default observer(App);
