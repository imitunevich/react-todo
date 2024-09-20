import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoApi } from "../../api/TodoApi";

export function TodoNew() {
  return (
    <section>
      <div className="container">
        <h2>Add Todo here:</h2>
        <TodoForm onSubmit={TodoApi.addTodo} />
      </div>
    </section>
  );
}
