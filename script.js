const input = document.querySelector("#input");
const counter = document.querySelector(".counter");

input.addEventListener("input", () => {
  counter.textContent = `${input.value.length} Caracteres`;
});

function resetar() {
  input.value = '';
  counter.textContent = '0 Caracteres';
}
