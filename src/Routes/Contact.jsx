import Form from "../Components/Form";
import { useAppContext } from "../Hooks/useAppContext";

const Contact = () => {
  const { appState } = useAppContext();

  return (
    <main className={`${appState.theme === "dark" && "bg-[#666666]"} w-full`}>
      <div
        className={` min-h-screen mx-auto flex flex-col gap-8 py-8 w-[1080px]`}
      >
        <div>
          <h1
            className={`text-left text-3xl ${
              appState.theme === "dark" && "text-white"
            }`}
          >
            Want to know more?
          </h1>
          <p
            className={`text-left  ${
              appState.theme === "dark" && "text-white"
            }`}
          >
            Send us your questions and we will contact you
          </p>
        </div>

        <Form />
      </div>
    </main>
  );
};

export default Contact;
