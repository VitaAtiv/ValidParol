import { generateRandomColor } from "./helpers/generateRandomColor.js";
import { submitForm } from "./helpers/submitForm.js";

const isValidParol = document.querySelector(".textParolInput");

function parolValid(event) {
  const parolEl = event.target.value;

  const validEnglish = /[^A-Za-z]/; // чи всі англ
  const isNotValidEng = validEnglish.test(parolEl);
  const NumberInStr = /\d/; // чи є число
  const isNumberInPass = NumberInStr.test(parolEl);
  const bigFirstLiter = /^[A-Z]/; // чи перша літера велика
  const isValidFirstLit = bigFirstLiter.test(parolEl[0]);

  if (isNotValidEng && !isNumberInPass && !isValidFirstLit) {
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



const refs = {
  box: document.querySelector(".box"),
  btn: document.querySelector(".colorBtn"),
};


refs.btn.addEventListener("click", onClickBtn);
function onClickBtn() {
    const anyColor = generateRandomColor();
    refs.box.style.backgroundColor = anyColor;
}



const agreeCheck = document.querySelector(".checkLabelInput");
const sendForm = document.querySelector(".forma");

  
    






agreeCheck.addEventListener("submit", onSubmit);

function submitForm() {
  // Отримання елемента checkbox
  const agreeCheckbox = document.getElementById("agreeCheckbox");

  // Перевірка, чи checkbox відмічений
  if (!agreeCheckbox.checked) {
    // Якщо checkbox не відмічений, встановлюємо атрибут disabled для кнопки
    alert("Будь ласка, погодьтеся з умовами перед відправленням форми.");
    return false; // Відміна відправки форми
  } else {
    // Якщо checkbox відмічений, додаємо обробник подій для події submit
    document.getElementById("myForm").addEventListener("submit", function () {
      // Очищення значень усіх полів форми
      document.getElementById("name").value = "";
      // Якщо є інші поля, додайте їх очищення тут
    });
    return true; // Продовжити відправку форми
  }
}

