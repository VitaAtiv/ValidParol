const isValidParol = document.querySelector(".text-parol-input");

function parolValid(event) {
   
    const parolEl = event.target.value;
    const nonEnglishRegex = /[^A-Za-z]/;
    const isNotValidEng = nonEnglishRegex.test(parolEl);
    if (isNotValidEng) {
         isValidParol.classList.add("not-valid");
    }
    const firstLiter = event.target.value[0]
    console.log(firstLiter);
    const nonFirstLiter = /^[A-Z]/;
    const isNotValidFirstLiterBig = nonFirstLiter.test(firstLiter);
}


    isValidParol.addEventListener("input", parolValid)