export interface TodoItem {
  id: string;
  name: string;
  content: string;
  status: TodoStatus;
  categoryId: string;
}

export enum TodoStatus {
  Todo = "Todo",
  Done = "Done",
  OnHold = "OnHold",
}

export interface TodoCategory {
  id: string;
  name: string;
}

export interface TodoCategoryNormalized {
  [key: string]: TodoCategory;
}
