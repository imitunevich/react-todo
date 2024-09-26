import { Link, useLoaderData } from "react-router-dom";
import { TodoCategory } from "../../todo-types";
import { TodosResultList } from "../../containers/TodosResultList/TodosResultList";

export function CategoryResultPage() {
  const category: TodoCategory = useLoaderData() as TodoCategory;
  return (
    <section>
      <div className="container">
        {category ? (
          <>
            <h1 className={"mb-5"}>{category.name}</h1>
            <TodosResultList categories={{ [category.id]: category }} />
          </>
        ) : (
          <h1>No category found</h1>
        )}
        <Link className={"btn btn-primary mt-5"} to={"/todos"}>
          Back to all categories
        </Link>
      </div>
    </section>
  );
}
