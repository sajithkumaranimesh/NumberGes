// let date = new Date();
// console.log(date)

// console.log(Math.round(4.3));

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(11));
// // Expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // Expected output: 0

// console.log(Math.random());
// // Expected output: a number from 0 to <1


// let customer = {
//     name:"nimesh",
//     age:"23",
//     address:"Galle"
// }
// //console.log(customer);

// let jsonObj = JSON.stringify(customer);

// console.log(jsonObj);

// let jsObj = JSON.parse(jsonObj)

// console.log(jsObj);

// let fun = function(){
//     console.log("Hello world");
// }

// let fun = () => {
//     console.log("Hello world");
// }

//let fun = () => console.log("Hello world");

//let fun = (val) => console.log("Hello world "+val);

// let fun = val => console.log("Hello world "+val);

// console.log(fun(10));


let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);

function gessfunction() {
    for(let i=0; i<4; i++){
        let userInput = document.getElementById("gessField").value;
        if (randomNumber == userInput) {
            console.log("your win");
            document.getElementById("demo").innerHTML = "your win";
            return;
        } else if (userInput > randomNumber) {
            alert("enter <" + userInput + ": ");
            userInput = document.getElementById("gessField");
        } else if (userInput < randomNumber) {
            alert("enter >" + userInput + ": ");
            userInput = document.getElementById("gessField");
        } else {
            console.log("your fail");
            return;
        }
    }
}