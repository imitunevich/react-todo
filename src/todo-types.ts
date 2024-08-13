export interface TodoItem {
  id: number;
  name: string;
  content: string;
  status: TodoStatus;
}

export enum TodoStatus {
  Todo,
  Done,
  OnHold,
}
