import React, { useState } from "react";
import style from '../../styles/home.module.css';

const Home = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [showX, setShowX] = useState(null);

  const modifToDo = (e) => {
    setTodo(e.target.value);
  };

  const addToList = (e) => {
    if (e.key === "Enter" && todo.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: todo,
      };
      setList([...list, newTask]);
      setTodo("");
    }
  };

  const removeTask = (taskId) => {
    const updatedList = list.filter((task) => task.id !== taskId);
    setList(updatedList);
  };

  return (
    <div className={`text-center total ${style.total}`}>
      <div>
        <ul className={`list-group ${style.laLista}`}>
          <input
            className={`list-group-item ${style.inputTarea}`}
            value={todo}
            onChange={(e) => modifToDo(e)}
            onKeyDown={(e) => addToList(e)}
          />
          {list.length > 0 ? (
            <>
              {list.map((task) => (
                <div key={task.id}>
                  <li
                    className={`list-group-item ${style.cadaTarea}`}
                    onMouseEnter={() => setShowX(task.id)}
                    onMouseLeave={() => setShowX(null)}
                  >
                    {task.text}
                    {showX === task.id && (
                      <button
                        onClick={() => removeTask(task.id)}
                        className={style.deleteButton}
                      >
                        X
                      </button>
                    )}
                  </li>
                </div>
              ))}
              <li className={`list-group-item ${style.textoDiferente}`}>
                {`Tienes ${list.length} tarea(s) por hacer.`}
              </li>
            </>
          ) : (
            <li className={`list-group-item ${style.textoDiferente}`}>
              Nada para hacer, ¡hora de Netflix!
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
