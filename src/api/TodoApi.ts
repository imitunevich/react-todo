import { TodoCategory, TodoItem } from "../todo-types";

export class TodoApi {
  static async getTodos(): Promise<TodoItem[]> {
    return fetch("http://localhost:2000/todos").then((res) => res.json());
  }

  static async addTodo(todo: TodoItem): Promise<TodoItem> {
    return fetch("http://localhost:2000/todos", {
      method: "POST",
      body: JSON.stringify({ ...todo }),
    }).then((res) => res.json());
  }

  static async updateTodo(todo: TodoItem): Promise<TodoItem> {
    return fetch(`http://localhost:2000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }

  static async deleteTodo(id: string): Promise<TodoItem> {
    return fetch(`http://localhost:2000/todos/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  static async getCategories(): Promise<TodoCategory[]> {
    return fetch("http://localhost:2000/categories").then((res) => res.json());
  }

  static async getCategoryById(id: string): Promise<TodoCategory> {
    return fetch(`http://localhost:2000/categories/${id}`).then((res) =>
      res.json(),
    );
  }

  static async addCategory(category: TodoCategory): Promise<TodoCategory> {
    return fetch("http://localhost:2000/categories", {
      method: "POST",
      body: JSON.stringify({ ...category }),
    }).then((res) => res.json());
  }

  static async deleteCategory(id: string): Promise<TodoCategory> {
    return fetch(`http://localhost:2000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
}
