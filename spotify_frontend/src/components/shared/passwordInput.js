const PasswordInput = ({ label, placeholder, className }) => {
  return (
    <div
      className={`textInputDiv w-full flex flex-col  space-y-2 `}
    >
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>

      <input
        type="password"
        className={
          "w-full textBox border border-solid border-gray-400 rounded p-2 placeholder-gray-400 "
        }
        placeholder={placeholder}
        id={label}
      />
    </div>
  );
};
export default PasswordInput;
