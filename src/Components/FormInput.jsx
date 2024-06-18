const FormInput = ({ input, value, handleInputChange, handleInputBlur }) => {
  return (
    <input
      className="py-2 border-[1px]  px-4"
      type={input.type}
      name={input.name}
      placeholder={input.placeholder}
      value={value}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      pattern={input.pattern}
      required
    />
  );
};

export default FormInput;
