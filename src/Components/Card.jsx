import { useAppContext } from "../Context/Context";
import { vetIsPresent } from "../utils";
import { Link } from "react-router-dom";

const Card = ({ vet }) => {
  const { appState, dispatch } = useAppContext();

  function addDeleteFav(e) {
    e.preventDefault();
    dispatch({ type: "ADD_DELETE_FAV", data: vet });
  }

  return (
    <Link to={`/detail/${vet.id}`} className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <h3>{vet.name}</h3>
      <p>{vet.username}</p>
      <p>{vet.id}</p>

      <button onClick={addDeleteFav} className="favButton">
        {vetIsPresent({ vet, arrayOfVets: appState.favs })
          ? "Remove fav"
          : "Add fav"}
      </button>
    </Link>
  );
};

export default Card;
