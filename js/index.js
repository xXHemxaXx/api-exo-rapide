let body = document.querySelector("body")
let input = document.querySelector("input")
let btn = document.querySelector("button")

console.log(input.value);

btn.addEventListener('click', function () {
    let couleur = input.value;
    body.style.backgroundColor = `${couleur}`
    console.log(couleur);
})