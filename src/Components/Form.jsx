import { useState } from "react";
import FormInput from "./FormInput";

const Form = () => {
  const formInputs = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
  ];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.checkValidity())
      setSuccessMessage(
        `Thank you ${formState.name}, we will contact you as soon as possible via email. `
      );
  }

  function handleOnBlur(e) {
    setError(!e.target.validity.valid);
  }

  function handleInputChange(e) {
    if (error) setError(false);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formInputs.map((input, index) => (
          <FormInput
            key={index}
            input={input}
            value={formState[input.name]}
            handleInputChange={handleInputChange}
            handleInputBlur={handleOnBlur}
          ></FormInput>
        ))}

        {error && <p>Por favor verifique su información nuevamente</p>}
        {successMessage && !error && <p>{successMessage}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
