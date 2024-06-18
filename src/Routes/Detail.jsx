import { useParams } from "react-router-dom";
import { useFetchData } from "../Hooks/useFetchData";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const data = useFetchData(`${API_URL}/${id}`);

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {/* aquí deberán renderizar la información en detalle de un user en específico */}
      {/* Deberán mostrar el name - email - phone - website por cada user en específico */}
      {data && (
        <>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.website}</p>
        </>
      )}
    </>
  );
};

export default Detail;
