import React from "react";
import { observer } from "mobx-react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import toDoStore from "../stores/ToDoStore";

const ToDoListItems = (): JSX.Element => {
  return (
    <>
      {toDoStore.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onClick={() => (todo.done = !todo.done)}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => (todo.text = evt.target.value)}
          />
          <Button
            onClick={() => {
              toDoStore.removeTodo(todo.id);
            }}
          >
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
};

const ToDoListObserver = observer(ToDoListItems);

export const TodoList = (): JSX.Element => {
  return (
    <>
      <Heading>Todo List - Library Component</Heading>
      <ToDoListObserver />
    </>
  );
};
