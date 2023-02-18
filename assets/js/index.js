// check user
var getUser = document.querySelector("#form-user");
var errUser = document.getElementById("user-error");
let boolUser = true;

function myUser() {
  if (getUser.value.length == 0) {
    errUser.innerText = "Tên đăng nhập không được để trống";
    boolUser = false;
    errUser.style.color = "red";
  } else if (getUser.value.length < 6 || getUser.value.length > 15) {
    errUser.innerText =
      "Tên đăng nhập không được ít hơn 6 kí tự và nhiều hơn 15 kí tự";
    boolUser = false;
    errUser.style.color = "red";
  } else if (
    getUser.value.includes(" ") ||
    getUser.value.includes(".") ||
    getUser.value.includes(";") ||
    getUser.value.includes(",") ||
    getUser.value.includes("'") ||
    getUser.value.includes('"')
  ) {
    errUser.innerText = "Tên đăng nhập không được chứa kí tự đặc biệt";
    boolUser = false;
    errUser.style.color = "red";
  } else {
    errUser.innerText = "Tên đăng nhập khả dụng";
    boolUser = true;
    errUser.style.color = "green";
  }
}
// check password
var getPass = document.querySelector("#form-password");
var errPass = document.getElementById("pass-error");
boolPass = true;
function myPass() {
  if (getPass.value.length == 0) {
    errPass.innerText = "Mật khẩu không được để trống";
    boolPass = false;
    errPass.style.color = "red";
  } else if (getPass.value.length < 6 || getPass.value.length > 15) {
    errPass.innerText =
      "Mật khẩu không được ít hơn 6 kí tự và nhiều hơn 15 kí tự";
    boolPass = false;
    errPass.style.color = "red";
  } else {
    errPass.innerText = "Mật khẩu khả dụng";
    boolPass = true;
    errPass.style.color = "green";
  }
}

// submit
function submitLogin() {
  if (boolUser == false && boolPass == false) {
    alert("Kiểm tra lại tài khoản và mật khẩu");
  } else {
    alert("Đăng nhập thành công");
  }
}
// change background between light - dark
const btn = document.querySelector(".dark-mode-btn");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", changeTheme);
function changeTheme() {
  if (theme.getAttribute("href") == "./assets/css/index.css") {
    theme.href = "./assets/css/darkmode.css";
  } else {
    theme.href = "./assets/css/index.css";
  }
}
