import { muestraError, eh } from "./lib/util.js";
const ul = document.querySelector("ul");
firebase.database().ref("Pasatiempo").on("value",
  dataSnapshot => {
    let contenido = "";
    dataSnapshot.forEach(ds => {
      const modelo = ds.val();
      contenido +=
        `<li>
          <a href="pasatiempo.html?key=${encodeURIComponent(ds.key)}">
            ${eh(modelo.nombre)}
          </a>
        </li>`;
    });
    ul.innerHTML = contenido;
  },
  muestraError);