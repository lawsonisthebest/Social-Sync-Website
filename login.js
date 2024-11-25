//login stuff
const loginBtn = document.querySelector(".loginBtn");
const usernameLogin = document.querySelector(".username");
const passwordLogin = document.querySelector(".password");
const errorTxt = document.querySelector(".errorTxt");
errorTxt.style = "display: none";
var isLoggedIn = false;

const users = [
    {
        username: "lhiggins",
        password: "123456"
    },
];

loginBtn.addEventListener("click", ()=>{
    for (let index = 0; index < users.length; index++) {
        if(!isLoggedIn){
            if(usernameLogin.value == users[index].username && passwordLogin.value == users[index].password){
                errorTxt.style = "display: none";
                isLoggedIn = true;
            }else{
                errorTxt.style = "display: flex";
                passwordLogin.value = "";
            }
        }
    }
});