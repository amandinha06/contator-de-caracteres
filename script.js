const input = document.querySelector("#input");
const counter = document.querySelector(".counter");

input.addEventListener("input", () => {
    let count = 0;

    if(count === 0) {
        count= input.value.length;

        counter.textContent = `${count} Caracteres`;
    }
});

