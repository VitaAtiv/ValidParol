const isValidParol = document.querySelector(".text-parol-input");

function parolValid(event) {
    console.log(event.target);

}

isValidParol.addEventListener ("input", parolValid)