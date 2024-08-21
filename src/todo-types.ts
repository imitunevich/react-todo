export interface TodoItem {
  id: number;
  name: string;
  content: string;
  status: TodoStatus;
}

export enum TodoStatus {
  Todo = "Todo",
  Done = "Done",
  OnHold = "OnHold",
}
