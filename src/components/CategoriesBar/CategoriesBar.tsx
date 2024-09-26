import { TodoCategory, TodoCategoryNormalized } from "../../todo-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CategoryModal } from "../CategoryModal/CategoryModal";

type Props = {
  categories: TodoCategoryNormalized;
  addCategory: (category: TodoCategory) => void;
};

const bgColors: string[] = [
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

function renderCategories(categories: TodoCategoryNormalized) {
  const content = [];
  let index = 0;
  for (const categoryId in categories) {
    if (index >= bgColors.length) index = 0;
    content.push(
      <li key={categoryId}>
        <Link
          to={`/category/${categoryId}`}
          className={`btn btn-${bgColors[index++]}`}
        >
          {categories[categoryId].name}
        </Link>
      </li>,
    );
  }
  return content;
}
export function CategoriesBar({ categories, addCategory }: Props) {
  const [isCategoryModalVisible, setIsCategoryModalVisible] =
    useState<boolean>(false);
  function onAddCategoryClick() {
    setIsCategoryModalVisible(true);
  }

  return (
    <>
      <h2>Categories</h2>
      <ul className={"d-flex gap-2 list-inline"}>
        {renderCategories(categories)}
      </ul>
      <button className={"btn btn-primary"} onClick={onAddCategoryClick}>
        Add category
      </button>
      {isCategoryModalVisible && (
        <CategoryModal
          modalId={"newCategory"}
          title={"Add new category"}
          onSubmit={addCategory}
          setModalVisible={setIsCategoryModalVisible}
        />
      )}
    </>
  );
}
