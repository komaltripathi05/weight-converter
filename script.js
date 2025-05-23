const form = document.querySelector("form");
form.addEventListener("submit", function (e) {

    e.preventDefault();   // avoid refresing of page

    const input = document.querySelector("input");

    const convertedWeight = document.querySelector("span");

    let kgTopound;

    if ((isNaN(input.value)) || input.value <= 0) {
        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "<p> Please enter a valid number!</p>"
        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("error");
        }, 2500);
        input.value = "";
    } else {

        kgTopound = Number(input.value) * 2.20462; //1kg
        convertedWeight.classList.add("successful");
        convertedWeight.innerHTML = `${kgTopound.toFixed(3)}`;

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("successful");
            input.value = "";
        }, 1000);
    }
});