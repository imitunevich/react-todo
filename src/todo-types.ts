export interface TodoItem {
  id: string;
  name: string;
  content: string;
  status: TodoStatus;
}

export enum TodoStatus {
  Todo = "Todo",
  Done = "Done",
  OnHold = "OnHold",
}
