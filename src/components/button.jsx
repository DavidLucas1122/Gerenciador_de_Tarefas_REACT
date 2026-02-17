function Button(props) {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-sm text-white">
      {/* O que eu passo para dentro do componente */}
      {props.children}
    </button>
  );
}

export default Button;
