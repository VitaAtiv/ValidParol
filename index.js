const isValidParol = document.querySelector(".text-parol-input");

function parolValid(event) {
   
    const parolEl = event.target.value;
    console.log(parolEl);


    const nonEnglishRegex = /[^A-Za-z]/;
    const isNotValidEng = nonEnglishRegex.test(parolEl);
    if (isNotValidEng) {
        isValidParol.classList.add("not-valid");
        alert('У пароля перша літера маленька.')
    }

    const NumberInStr = /\d/;
    const isNumberInPass = NumberInStr.test(parolEl)
    if (!isNumberInPass) {
        isValidParol.classList.add("not-valid");
        alert('Пароль не містить жодного числа.')
    }
    
    const firstLiter = event.target.value[0]
    console.log(firstLiter);
    const nonFirstLiter = /^[A-Z]/;
    const isNotValidFirstLiterBig = nonFirstLiter.test(firstLiter);
    if (!isNotValidFirstLiterBig) {
        isValidParol.classList.add("not-valid");
        alert('У пароля перша літера маленька.')
}

const 

  
        function checkForNumber() {
            // Отримуємо значення інпута
            var password = document.getElementById('passwordInput').value;

            // Перевіряємо, чи містить хоча б одне число
            if (/\d/.test(password)) {
                alert('Пароль містить хоча б одне число.');
            } else {
                alert('Пароль не містить жодного числа.');
            }
        }
  
}


    isValidParol.addEventListener("input", parolValid)