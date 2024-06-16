import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const { appState } = useAppContext();
  const vet = appState.vets.find((vet) => vet.id === parseInt(id));
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>{vet.name}</h3>
      <p>{vet.email}</p>
      <p>{vet.phone}</p>
      <p>{vet.website}</p>
    </>
  );
};

export default Detail;
