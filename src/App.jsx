import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import { v4 } from "uuid";
import Title from "./components/title";

// Escrevendo primeiro componente
function App() {
  // "tasks" é a variável que guarda as tarefas, "setTasks" é a função para atualizar essa variável
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]"),
  );

  // Criando um localStorage para salvar as tarefas mesmo que a página seja atualizada
  // O useEffect executa a função, sempre que algum valor da lista for alterado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar esta tarefa
      if (task.id == taskId) {
        // Mudar apenas o inCompleted para o contrário do que está

        return { ...task, isCompleted: !task.isCompleted };
      }

      // Não preciso
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const task = tasks.filter((task) => {
      if (task.id !== taskId) {
        return task;
      }
    });
    setTasks(task);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    //Html
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        {/* Passar variável de tasks e a função onTaskClick ao documento Tasks através do props*/}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
