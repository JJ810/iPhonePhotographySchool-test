var modal = document.getElementById("modal");
var btn = document.getElementById("tips");
var span = document.getElementsByClassName("modal-content__close")[0];
var inputField = document.getElementById("email");
var inputContainer = document.getElementById("field");
var modal_btn = document.getElementById("modalTips");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  inputField.value = "";
  inputContainer.classList.remove("active");
  inputContainer.classList.remove("invalid");
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    inputField.value = "";
    inputContainer.classList.remove("active");
    inputContainer.classList.remove("invalid");
    modal.style.display = "none";
  }
};

inputField.addEventListener("focus", function () {
  inputContainer.classList.add("active");
});

inputField.addEventListener("blur", function () {
  if (!inputField.value) {
    inputContainer.classList.remove("active");
    inputField;
  }
});

modal_btn.onclick = function () {
  if (!(inputField.value && /(^\w.*@\w+\.\w)/.test(inputField.value))) {
    inputContainer.classList.add("invalid");
  }
};

inputField.addEventListener("input", inputEmail);

function inputEmail() {
  inputContainer.classList.remove("invalid");
}
