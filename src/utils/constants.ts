import { TodoItem, TodoStatus } from "../todo-types";

export const INIT_TODO_LIST: TodoItem[] = [
  { id: 1, name: "item 1", content: "content 1", status: TodoStatus.Todo },
  { id: 2, name: "item 2", content: "content 2", status: TodoStatus.Done },
  { id: 3, name: "item 3", content: "content 3", status: TodoStatus.Todo },
];
