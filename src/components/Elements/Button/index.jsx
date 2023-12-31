const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
