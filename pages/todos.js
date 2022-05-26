import { useEffect, useState } from "react";

const Todos = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/todos", {
          credentials: "include",
        });

        const content = await response.json();

        setMessage(`Hi ${content.name}`);
      } catch (e) {
        setMessage("You are not logged in");
      }
    })();
  });

  return (
    <section>
      <div className="pt-20 text-center">{message}</div>
    </section>
  );
};

export default Todos;
