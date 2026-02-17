import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  //Recebendo a variável
  // console.log(props);
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  if (tasks.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {console.log(tasks)}

      {tasks.map((task) => (
        <li className="flex gap-2" key={task.id}>
          <button
            //Chamar a função passando o id atual da tarefa
            onClick={() => onTaskClick(task.id)}
            className={`flex gap-2 bg-slate-400 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
            {/* Mudar a interface conforme o mudar da informação inCompleted*/}
            {/* {tasks.isCompleted ? "COMPLETE" : "INCOMPLETE"} */}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
