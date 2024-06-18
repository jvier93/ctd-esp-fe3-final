import { useState } from "react";
import { useAppContext } from "../Hooks/useAppContext";
import FormInput from "./FormInput";

const Form = () => {
  const { appState } = useAppContext();

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
      pattern: "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
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
      <form className="flex flex-col w-96 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          {formInputs.map((input, index) => (
            <FormInput
              key={index}
              input={input}
              value={formState[input.name]}
              handleInputChange={handleInputChange}
              handleInputBlur={handleOnBlur}
            ></FormInput>
          ))}
        </div>

        {error && (
          <p
            className={`text-left  ${
              appState.theme === "dark" && "text-white"
            }`}
          >
            Please verify your information again.
          </p>
        )}
        {successMessage && !error && (
          <p
            className={`text-left  ${
              appState.theme === "dark" && "text-white"
            }`}
          >
            {successMessage}
          </p>
        )}

        <button
          className="w-full  border-[1px] hover:text-white hover:bg-[#666666] py-2 bg-gray-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
