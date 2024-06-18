import { useAppContext } from "../Hooks/useAppContext";
import Card from "../Components/Card";

const Home = () => {
  const { appState } = useAppContext();
  const dentists = appState.dentists;

  return (
    <main className={`${appState.theme === "dark" && "bg-[#666666]"} w-full`}>
      <div className={` min-h-screen mx-auto py-8 w-[1080px]`}>
        <h1
          className={`text-left text-3xl ${
            appState.theme === "dark" && "text-white"
          }`}
        >
          Our professionals
        </h1>
        <div className="py-4 flex gap-4 flex-wrap">
          {dentists.map((dentist, index) => {
            return <Card key={index} dentist={dentist}></Card>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
