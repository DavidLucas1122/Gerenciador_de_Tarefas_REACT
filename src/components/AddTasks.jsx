import { useState } from "react";
import Input from "./input";

function AddTasks({ onAddTaskSubmit }) {
  //Criar states para receber a informação dos inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa!"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      {/* Chamar propriedade Input e mantér a estilização para ambos inputs */}
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa!"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      {/* Só mostrar se existir uma mensagem de erro. */}
      {error && (
        <span className="block text-red-700 bg-red-300 border border-red-800 p-2 rounded-md">
          {error}
        </span>
      )}
      <button
        onClick={() => {
          // Verificar campos vazios
          if (!title.trim()) {
            setError("Preencha o título corretamente");
            return;
          } else if (!description.trim()) {
            setError("Preencha a descrição corretamente");
            return;
          }
          setError("");
          onAddTaskSubmit(title, description);

          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
