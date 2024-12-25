const Button = ({ text, onClick, outlined }) => {
  return (
    <div>
      <button
        className={
          outlined
            ? "border border-fuchsia hover:bg-fuchsia px-5 py-2.5 text-center me-2 mb-2 rounded-lg text-sm"
            : "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        }
        onClick={() => onClick()}
      >
        <div className="text-white text-lg">{text}</div>
      </button>
    </div>
  );
};

export default Button;
