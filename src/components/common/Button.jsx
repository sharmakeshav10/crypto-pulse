const Button = ({ text, onClick, outlined }) => {
  return (
    <div>
      <button
        className={
          outlined
            ? "border border-fuchsia py-2 px-3 rounded-2xl"
            : "bg-fuchsia py-2 px-3 border border-none rounded-2xl hover:shadow-lg"
        }
        onClick={() => onClick()}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
