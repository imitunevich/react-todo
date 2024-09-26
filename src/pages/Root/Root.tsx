import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoApi } from "../../api/TodoApi";
import { TodoCategory, TodoCategoryNormalized } from "../../todo-types";
import { CategoriesBar } from "../../components/CategoriesBar/CategoriesBar";
import { TodosResultList } from "../../containers/TodosResultList/TodosResultList";
import { normalizeArray } from "../../utils/utils";
export function Root() {
  const [categories, setCategories] = useState<TodoCategoryNormalized>({});

  useEffect(() => {
    TodoApi.getCategories().then((data: TodoCategory[]) => {
      setCategories(normalizeArray(data));
    });
  }, []);

  function addCategory(category: TodoCategory) {
    TodoApi.addCategory(category).then((category: TodoCategory) => {
      setCategories((prevState: TodoCategoryNormalized) => ({
        ...prevState,
        [category.id]: category,
      }));
    });
  }

  return (
    <section>
      <div className="container">
        <Link to={"/todos/new"} className={"btn btn-primary mb-5 mt-2"}>
          Add new TODO
        </Link>

        <div className={"mb-5"}>
          <CategoriesBar categories={categories} addCategory={addCategory} />
        </div>

        <TodosResultList categories={categories} />
      </div>
    </section>
  );
}
