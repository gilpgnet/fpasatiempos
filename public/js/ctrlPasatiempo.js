import { muestraError } from "./lib/util.js";
const parametros = new URLSearchParams(location.search);
const key = parametros.get("key");
const vista = document.vista;
firebase.database().ref("Pasatiempo").child(key).once("value",
  dataSnapshot => {
    if (dataSnapshot.exists) {
      const modelo = dataSnapshot.val();
      document.title = modelo.nombre;
      vista.titulo.value = modelo.nombre;
      vista.nombre.value = modelo.nombre;
      vista.addEventListener("submit", guarda);
      vista.elimina.addEventListener("click", elimina);
    } else {
      alert("Pasatiempo no encontrado");
      document.location = "index.html";
    }
  },
  muestraError);
async function guarda(evt) {
  try {
    evt.preventDefault();
    const nombre = vista.nombre.value.trim();
    const modelo = { nombre };
    await firebase.database().ref("Pasatiempo").child(key).set(modelo);
    document.location = "index.html";
  } catch (e) {
    muestraError(e)
  }
}
async function elimina() {
  try {
    await firebase.database().ref("Pasatiempo").child(key).remove();
    document.location = "index.html";
  } catch (e) {
    muestraError(e)
  }
}