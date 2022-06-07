import { useEffect, useState } from "react";
import { todos } from "../../lib/api";
import TodoPage from "../todos/TodoPage";

const Todos = () => {
  const [list, setList] = useState([]);

  // "https://gwf.exceedbravo.com/todos/api/v1/todos",
  const getToDos = async () => {
    const useItems = await todos();
    console.log(useItems);
    return setList(useItems);
  };
  useEffect(() => {
    setTimeout(() => {
      getToDos();
    }, 3000);
  }, []);
  return (
    <section>
      <main className=" text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Next.js <span className="text-gray-600">Todo-App!</span>
        </h1>

        <p className="mt-3 text-2xl mb-8">Get started by listing your items</p>

        <TodoPage />
      </main>

      <footer className="flex h-24 w-full items-center justify-center">
        <p className="flex items-center justify-center">
          With &#128151; from T.Nation
        </p>
      </footer>
    </section>
  );
};

export default Todos;
