const FormInput = ({ input, value, handleInputChange, handleInputBlur }) => {
  return (
    <div>
      <label htmlFor={input.name}>{input.placeholder}</label>
      <input
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        pattern={input.pattern}
        required
      />
    </div>
  );
};

export default FormInput;
