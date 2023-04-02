const loginDiv=document.querySelector("#login-div")
const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greetingDiv=document.querySelector("#greeting-div")
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="username";

function onLoginSubmit (event) { 
    event.preventDefault();  //새로고침 막기
    loginDiv.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greetingDiv.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const sevedUsername =localStorage.getItem(USERNAME_KEY);

if(sevedUsername===null){
    loginDiv.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    paintGreetings(sevedUsername);

}