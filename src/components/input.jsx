// Criar componentes para receber estilizações repitidas

function Input(props) {
  return (
    <input
      className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      // Passar todas as propriedades recebidas para o input
      {...props}
    />
  );
}

export default Input;
