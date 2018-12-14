export function muestraError(e) {
  console.error(e);
  alert(e.message);
}
export function eh(texto) {
  let div = document.createElement('div');
  div.innerText = texto;
  return div.innerHTML;
}