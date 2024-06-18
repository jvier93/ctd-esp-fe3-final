import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

export const useAppContext = () => {
  return useContext(ContextGlobal);
};
