import { createContext, useReducer, useEffect } from "react";
import { dentistIsPresent, getFavs, setFavs } from "./utils";
import { useFetchData } from "../../Hooks/useFetchData";

const initialState = {
  dentists: [],
  favs: getFavs(),
  theme: "light",
};

//Acciones
//FETCH_DATA - Cuando traemos datos de la api
//TOGGLE_THEME - Cuando cambiamos el tema de nuestra app
//ADD_DELETE_FAV - Cuando guardamos o quitar un dentist de favoritos

const reducer = (appState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...appState,
        dentists: action.data,
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

      if (
        dentistIsPresent({
          dentist: action.data,
          arrayOfDentists: appState.favs,
        })
      ) {
        const newFavs = appState.favs.filter(
          (dentist) => dentist.id !== action.data.id
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

export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const data = useFetchData(API_URL);
  useEffect(() => {
    data && dispatch({ type: "FETCH_DATA", data });
  }, [data]);

  return (
    <ContextGlobal.Provider value={{ appState, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
