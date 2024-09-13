import { TodoForm } from "../../components/TodoForm/TodoForm";

export function TodoNew() {
  return (
    <section>
      <div className="container">
        <h2>Add Todo here:</h2>
        <TodoForm onSubmit={() => {}} />
      </div>
    </section>
  );
}
