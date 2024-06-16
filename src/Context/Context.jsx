import { createContext, useContext, useReducer, useEffect } from "react";
import { vetIsPresent } from "../utils";

const AppContext = createContext();
const API_URL = "https://jsonplaceholder.typicode.com/users";

const Context = ({ children }) => {
  const initialState = {
    vets: [],
    favs: getFavs(),
    theme: "light",
  };

  //Acciones
  //FETCH_DATA - Cuando traemos datos de la api
  //CHANGE_THEME - Cuando cambiamos el tema de nuestra app
  //SAVE_FAV - Cuando guardamos en favoritos un vet
  //DELETE_FAV - Cuando quitamos de favoritos un vet
  const reducer = (appState, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...appState,
          vets: action.data,
        };

      case "TOGGLE_THEME":
        return {
          ...appState,
          theme: appState.theme === "light" ? "dark" : "light",
        };
      case "ADD_DELETE_FAV":
        //Si existe en appContext.favs quitarlo
        //si no agregarlo
        //guardar cambios en sessionStorage
        //devolver nuevo array de favs

        if (vetIsPresent({ vet: action.data, arrayOfVets: appState.favs })) {
          const newFavs = appState.favs.filter(
            (vet) => vet.id !== action.data.id
          );
          setFavs(newFavs);
          return {
            ...appState,
            favs: newFavs,
          };
        } else {
          const newFavs = [...appState.favs, action.data];
          setFavs(newFavs);
          return {
            ...appState,
            favs: newFavs,
          };
        }

      default:
        console.log("Select any action");
        break;
    }
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_DATA", data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  function getFavs() {
    return JSON.parse(sessionStorage.getItem("favs")) || [];
  }

  //usarla dentro del dispatch apropiado
  function setFavs(favs) {
    sessionStorage.setItem("favs", JSON.stringify(favs));
  }

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;

export const useAppContext = () => {
  return useContext(AppContext);
};
