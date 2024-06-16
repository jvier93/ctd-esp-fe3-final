export function vetIsPresent({ vet, arrayOfVets }) {
  if (!vet || !arrayOfVets) {
    console.log("Verify function params");
    return false;
  }
  return arrayOfVets.some((vetFromArray) => vetFromArray.id === vet.id);
}
