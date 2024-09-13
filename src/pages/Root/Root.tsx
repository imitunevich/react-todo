import { Link } from "react-router-dom";

export function Root() {
  return (
    <section>
      <div className="container">
        <h1 className={"mb-5"}>Welcome to TODO app!</h1>
        <Link to={"todos"} className={"btn btn-primary"}>
          Go to Todo List
        </Link>
      </div>
    </section>
  );
}
