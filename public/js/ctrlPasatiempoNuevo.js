import { muestraError } from "./lib/util.js";
const vista = document.vista;
vista.addEventListener("submit", guarda);
async function guarda(evt) {
  try {
    evt.preventDefault();
    const nombre = vista.nombre.value.trim();
    const modelo = { nombre };
    await firebase.database().ref("Pasatiempo").push().set(modelo);
    document.location = "index.html";
  } catch (e) {
    muestraError(e)
  }
}