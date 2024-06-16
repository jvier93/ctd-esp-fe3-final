import { useAppContext } from "../Context/Context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { appState } = useAppContext();
  const favs = appState.favs;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((vet, index) => {
          return <Card key={index} vet={vet}></Card>;
        })}
      </div>
    </>
  );
};

export default Favs;
