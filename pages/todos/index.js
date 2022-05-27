import { useEffect, useState } from "react";
import { todos } from "../../lib/api";

const Todos = () => {
  const [message, setMessage] = useState("");
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
      <div className="pt-20 text-center">{message}</div>
    </section>
  );
};

export default Todos;
