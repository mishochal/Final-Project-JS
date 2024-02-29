const users =
    [
        ["0101", "Ashley", 1550],
        ["0202", "John", 2253],
        ["0303", "Nick", 851],
        ["0404", "Jenny", 1440],
        ["0505", "Matthew", 5003],
        ["0606", "Alice", 260],
        ["0707", "Bethany", 3662],
        ["0808", "Martin", 450],
        ["0909", "Sam", 940]
    ];

const intro = document.getElementById("introduction");
const introMsg = document.getElementById("intro-message");
const id = document.getElementById("id");

const userPage = document.getElementById("user-page");
const userMsg = document.getElementById("user-message");

const transaction = document.getElementById("transaction");
const transactionMsg = document.getElementById("transaction-message");
const transactionInp = document.getElementById("transaction-inp");


let user;
let completeTransaction;

function toUserPage() {
    let found = false;
    let userId = id.value;
    id.value = "";
    for (currUser of users) {
        if (currUser[0] === userId) {
            user = currUser;
            found = true;
        }
    }
    if (found) {
        intro.style.display = "none";
        userPage.style.display = "flex";
        userMsg.innerHTML = `Hello, ${user[1]}! Please select operation`;
    } else {
        introMsg.innerHTML = "There is no user with that ID. <br> Try again.";
    }
}

function checkBalance() {
    let balance = user[2];
    userMsg.innerHTML = `Your balance is ${balance}$ <br> Please select operation`;
}

function withdraw() {
    transaction.style.display = "flex";
    transactionMsg.innerHTML = "Please enter the amount of money you'd like to withdraw";
    completeTransaction = withdrawMoney;
}

function deposit() {
    transaction.style.display = "flex";
    transactionMsg.innerHTML = "Please enter the amount of money you'd like to deposit";
    completeTransaction = depositMoney;
}

function toMainPage() {
    intro.style.display = "flex";
    introMsg.innerHTML = "Enter your ID"
    userPage.style.display = "none";
    transaction.style.display = "none";
}

function withdrawMoney() {
    let amount = parseInt(transactionInp.value);
    if (!isNaN(amount)) {
        amount -= amount % 5;
        if (amount <= user[2]) {
            user[2] -= amount;
            transaction.style.display = "none";
            userMsg.innerHTML = `You've withdrawn ${amount}$. <br> Please select operation`;
        } else {
            transaction.style.display = "none";
            userMsg.innerHTML = `You don't have enough money on your account. <br> Please select operation`;
        }
        transactionInp.value = "";
    }
}

function depositMoney() {
    let amount = parseInt(transactionInp.value);
    if (!isNaN(amount)) {
        user[2] += amount;
        transaction.style.display = "none";
        userMsg.innerHTML = `You've deposited ${amount}$. <br> Please select operation`;
        transactionInp.value = "";
    }
}

function closeTransaction() {
    transaction.style.display = "none";
    transactionInp.value = "";
}