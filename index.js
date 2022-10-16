const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");
const genPasswordBtn = document.getElementById("generate-btn");
const passwordLen = document.getElementById("passwordlen");
const showAlert = document.getElementById("alert");
const container = document.getElementsByClassName("container")



let randomPasswordOne = '';
let randomPasswordTwo = '';


function getPassword(passLen) {
    passLen = parseInt(passLen)
    randomPasswordOne = '';
    randomPasswordTwo = '';
    for (let i = 0; i < (passLen+1)*2; i++) {
        if (i < passLen) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            randomPasswordOne += characters[randomIndex]
        } else {
            let randomIndex = Math.floor(Math.random() * characters.length);
            randomPasswordTwo += characters[randomIndex]
        }
    }
    passwordOne.textContent = randomPasswordOne
    passwordTwo.textContent = randomPasswordTwo
}

genPasswordBtn.addEventListener('click', () => {
    if (parseInt(passwordLen.value) < 16 || parseInt(passwordLen.value) > 0) {
        showAlert.style.display = "none";
        container[0].style.padding = "115px 52px 115px 52px"
        getPassword(passwordLen.value)
    } else {
        showAlert.style.display = "block";
        container[0].style.padding = "90px 52px 115px 52px"
    }
})

