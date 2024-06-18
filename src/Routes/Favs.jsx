import { useAppContext } from "../Hooks/useAppContext";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { appState } = useAppContext();
  const favs = appState.favs;

  return (
    <main className={`${appState.theme === "dark" && "bg-[#666666]"} w-full`}>
      <div className={` min-h-screen mx-auto py-8 w-[1080px]`}>
        <h1
          className={`text-left text-3xl ${
            appState.theme === "dark" && "text-white"
          }`}
        >
          Dentists Favs
        </h1>
        <div className="py-4 flex gap-4 flex-wrap">
          {favs.map((dentist, index) => {
            return <Card key={index} dentist={dentist}></Card>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Favs;
