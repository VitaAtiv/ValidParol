export function submitForm(event) {
  event.preventDefault();
  const validCheck = agreeCheck.checked;
  if (!validCheck) {
    return false;
  } else {
    sendForm.addEventListener("submit", function () {
      document.getElementById("name").value = "";
    });
    return true;
  }
}
