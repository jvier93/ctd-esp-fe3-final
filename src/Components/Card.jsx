import { useAppContext } from "../Hooks/useAppContext";
import { dentistIsPresent } from "./utils/utils";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { appState, dispatch } = useAppContext();

  function addDeleteFav(e) {
    e.preventDefault();
    dispatch({ type: "ADD_DELETE_FAV", data: dentist });
  }

  return (
    <Link
      to={`/detail/${dentist.id}`}
      className="w-60 flex gap-4 flex-col bg-white   border-[1px]"
    >
      <div className="flex flex-col  gap-2">
        <img className="w-60" src="./images/doctor.jpg" alt="" />
        <div className="flex px-2 flex-col gap-0">
          <h3>{dentist.name}</h3>
          <p className="text-gray-400 text-sm">{dentist.username}</p>
        </div>
      </div>
      <button
        onClick={addDeleteFav}
        className="w-full hover:text-white hover:bg-[#666666] py-2 bg-gray-200"
      >
        {dentistIsPresent({ dentist, arrayOfDentists: appState.favs })
          ? "Remove fav"
          : "Add fav"}
      </button>
    </Link>
  );
};

export default Card;
