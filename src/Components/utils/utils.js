export function dentistIsPresent({ dentist, arrayOfDentists }) {
  if (!dentist || !arrayOfDentists) {
    console.log("Verify function params");
    return false;
  }
  return arrayOfDentists.some(
    (dentistFromArray) => dentistFromArray.id === dentist.id
  );
}

export function getFavs() {
  return JSON.parse(sessionStorage.getItem("favs")) || [];
}

//usarla dentro del dispatch apropiado
export function setFavs(favs) {
  sessionStorage.setItem("favs", JSON.stringify(favs));
}
