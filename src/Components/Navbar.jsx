import { Link } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { appState, dispatch } = useAppContext();

  function handleOnClick() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  const links = [
    { to: "/", label: "Home" },
    { to: "/Contact", label: "Contact" },
    { to: "/favs", label: "Favs" },
  ];

  return (
    <nav className={` w-full   ${appState.theme === "dark" && "dark"}`}>
      <div className="mx-auto h-20 flex justify-between items-center max-w-[1080px]">
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-10" src="/images/logo.png" alt="App-logo"></img>
          <Link
            className={`hover:text-[#0177c1] ${
              appState.theme === "dark" && "dark"
            }`}
            to="/"
          >
            Dental Clinic
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex gap-2">
            {links.map((link) => (
              <Link
                className={`hover:text-[#0177c1]  ${
                  appState.theme === "dark" && "dark"
                }`}
                to={link.to}
                key={link.to}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <button onClick={handleOnClick}>
            <img
              className="w-10"
              src={
                appState.theme === "light"
                  ? "/images/light.png"
                  : "/images/dark.png"
              }
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
