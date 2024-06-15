import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const initialState = {
    vets: [],
    favs: [],
    theme: "light",
  };

  const reducer = (appState, action) => {
    return;
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={(appState, dispatch)}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;

export const useAppContext = () => {
  return useContext(AppContext);
};
