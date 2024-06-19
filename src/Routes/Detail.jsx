import { useParams } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";
import { useFetchData } from "../Hooks/useFetchData";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const { appState } = useAppContext();

  const { id } = useParams();
  const data = useFetchData(`${API_URL}/${id}`);

  return (
    <main className={`${appState.theme === "dark" && "bg-[#666666]"} w-full`}>
      <div
        className={` min-h-screen mx-auto py-8 w-[1080px] ${
          appState.theme === "dark" && "text-white"
        }`}
      >
        <h1 className={`text-left text-3xl `}>Detail Dentist</h1>
        {/* aquí deberán renderizar la información en detalle de un user en específico */}
        {/* Deberán mostrar el name - email - phone - website por cada user en específico */}
        {data && (
          <div className="py-4">
            <h3>Name: {data.name}</h3>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Detail;
