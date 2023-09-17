const scriptURL =
  "https://script.google.com/macros/s/AKfycby4MhU4I4pO-YfpbND0FoG6oVfGv9qagBUL-lpCY7PMT7zCj9fxGiQ6URaMOxNeUkNu/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("spinner").style.display = "flex";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response_())
    .catch((error) => error_());

  const emailID = document.getElementById("email");
  emailID.value = "";
});

const response_ = () => {
  document.getElementById("mailbox").className += " responsed";
  document.getElementById("mailbox").innerHTML =
    `We have received your response.
    Thanks for contacting us.
    `;
  document.getElementById("spinner").style.display = "none";
};
const error_ = () => {
  document.getElementById("mailbox").className += " responsed";
  document.getElementById("mailbox").innerHTML = "Some error occured";
  document.getElementById("spinner").style.display = "none";
};