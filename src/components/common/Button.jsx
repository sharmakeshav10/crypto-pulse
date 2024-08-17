const Button = ({ text, onClick, outlined }) => {
  return (
    <div>
      <button
        className={
          outlined
            ? "border border-fuchsia py-2 px-3 rounded-full"
            : "bg-fuchsia py-2 px-3 border border-none rounded-full hover:shadow-lg"
        }
        onClick={() => onClick()}
      >
        <div className="text-white">{text}</div>
      </button>
    </div>
  );
};

export default Button;
