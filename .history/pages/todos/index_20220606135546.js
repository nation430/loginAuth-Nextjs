import { useEffect, useState } from "react";
import { todos } from "../../lib/api";

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
      <div className="pt-20 text-center"></div>
    </section>
  );
};

export default Todos;
