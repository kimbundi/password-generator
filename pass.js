const pass = document.getElementById('pass');

let length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$^*!?";
const allchars = uppercase + lowercase + numbers + symbols;
function createpassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    pass.value = password;
};

function copypass() {
    pass.select();
    document.execCommand("copy");
}