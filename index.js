const isValidParol = document.querySelector(".text-parol-input");

function parolValid(event) {
  const parolEl = event.target.value;

  const validEnglish = /[^A-Za-z]/; // чи всі англ
  const isNotValidEng = validEnglish.test(parolEl);
  const NumberInStr = /\d/; // чи є число
  const isNumberInPass = NumberInStr.test(parolEl);
  const bigFirstLiter = /^[A-Z]/; // чи перша літера велика
  const isValidFirstLit = bigFirstLiter.test(parolEl[0]);

  if (!isNotValidEng && !isNumberInPass && !isValidFirstLit) {
    isValidParol.classList.add("not-valid");
    return;
  } else {
    console.log("Пароль валідний.");
  }
}

// function validatePassword(password) {
//   // Починатися з великої літери, містити одне число і складатися тільки з англійських літер
//   const passwordPattern = /^(?=.*[A-Z])(?=.*\d)^[A-Za-z\d]+$/;

//   return passwordPattern.test(password);
// }

// // Приклад використання:
// const passwordToValidate = "Password123";
// if (validatePassword(passwordToValidate)) {
//   console.log("Пароль відповідає умовам валідації.");
// } else {
//   console.log("Пароль не відповідає умовам валідації.");
// }

isValidParol.addEventListener("input", parolValid);



const changeColorBox = document.querySelector(".box");
const colorBtn = document.querySelector(".colorBtn");

function generateRandomColor() {
       
       const anyColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return anyColor;
    
   }


    const anyColor = generateRandomColor();   
    changeColorBox.style.backgroundColor = anyColor;
