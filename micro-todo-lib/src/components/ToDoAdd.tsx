import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react";

import toDoStore from "../stores/ToDoStore";

const TodoAdd = (): JSX.Element => {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={toDoStore.newTodo}
        onChange={(evt) => (toDoStore.newTodo = evt.target.value)}
        placeholder="New todo"
      />
      <Button onClick={() => toDoStore.addToDo()}>Add Todo</Button>
    </Grid>
  );
};

export default observer(TodoAdd);
