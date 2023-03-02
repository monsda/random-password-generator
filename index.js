const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");
const genPasswordBtn = document.getElementById("generate-btn");
const passwordLen = document.getElementById("passwordlen");
const showAlert = document.getElementById("alert");
const container = document.getElementsByClassName("container");
const plusIcon = document.getElementById('plus-icon');
const minusIcon = document.getElementById('minus-icon');

let randomPasswordOne = '';
let randomPasswordTwo = '';
let timer;
let value = 5;

function continuosIncerment() {
    if (value < 20) {
        value++
        passwordLen.value = value
        timer = setTimeout(continuosIncerment, 100);
        // interval = setInterval(continuosIncerment, 100)
    }
}
function continuosDecerment() {
    if (value > 1) {
        value--
        passwordLen.value = value
        timer = setTimeout(continuosDecerment, 100);
    }
}

function timeoutClear() {
    clearTimeout(timer)
}



function getPassword(passLen) {
    passLen = parseInt(passwordLen.value);
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

plusIcon.addEventListener('mousedown', continuosIncerment)
plusIcon.addEventListener('mouseup', timeoutClear);
plusIcon.addEventListener('mouseleave', timeoutClear);

minusIcon.addEventListener('mousedown', () => {
    if (passwordLen.value === '0') {
        timeoutClear();
    }
    continuosDecerment();

})
minusIcon.addEventListener('mouseup', timeoutClear);
minusIcon.addEventListener('mouseleave', timeoutClear);



genPasswordBtn.addEventListener('click', () => {
    if (parseInt(passwordLen.value) > 0) {
        showAlert.style.display = "none";
        container[0].style.padding = "115px 52px 115px 52px"
        getPassword(passwordLen.value)
        
    } else if (parseInt(passwordLen.value) < 0){
        showAlert.textContent = "password length must be positive"
        showAlert.style.display = "block";
        container[0].style.padding = "90px 52px 115px 52px"
    } else if (parseInt(passwordLen.value) === 0) {
        showAlert.textContent = "password length cannot be 0"
        showAlert.style.display = "block";
        container[0].style.padding = "90px 52px 115px 52px"
    } else if (isNaN(passwordLen.value)){
        showAlert.textContent = "password length should be number"
        showAlert.style.display = "block";
        container[0].style.padding = "90px 52px 115px 52px"
    }
})

const copyPasswordOne = async () => {
    try {
        await navigator.clipboard.writeText(passwordOne.textContent)
        console.log('Content copied to clipboard:', passwordOne.textContent);
    } catch {
        console.error('fail to copy');
    }
}
const copyPasswordTwo = async () => {
    try {
        await navigator.clipboard.writeText(passwordTwo.textContent)
        console.log('Content copied to clipboard:', passwordTwo.textContent);
    } catch {
        console.error('fail to copy');
    }
}