/*const loginForm = document.querySelectorById("login-form");
const logininput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//아래도 똑같이 작동한다.*/
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function LoginBtnClick() {
  console.log(loginInput.value);
  console.log("click!!!!");
}

loginButton.addEventListener("click", LoginBtnClick);
