import { useAppContext } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useAppContext();

  function handleOnClick() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleOnClick}>Change theme</button>
    </nav>
  );
};

export default Navbar;
