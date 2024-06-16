import { useAppContext } from "../Context/Context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { appState } = useAppContext();
  const vets = appState.vets;

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {vets.map((vet, index) => {
          return <Card key={index} vet={vet}></Card>;
        })}
      </div>
    </main>
  );
};

export default Home;
