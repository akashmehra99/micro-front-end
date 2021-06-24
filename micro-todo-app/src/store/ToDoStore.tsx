import { makeAutoObservable } from "mobx";

// Standard interface and functions
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addToDo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

class ToDoStore {
  todos: Todo[] = [];
  newTodo = "";

  constructor() {
    makeAutoObservable(this);
  }

  addToDo() {
    this.todos = addToDo(this.todos, this.newTodo);
    this.newTodo = "";
  }

  updateTodosFromProps(todos: Todo[]) {
    this.todos = [...todos];
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }
}

const toDoStore = new ToDoStore();
export default toDoStore;
