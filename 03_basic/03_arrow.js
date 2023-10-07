const user = {
    username: "nirav",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this keyword current context ni vat kare. what is current. current value ne refer kare
        // global object  == window object --> event capture
        // this keyword we can only use in object. we can't use in only function
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // this keyword refer current context that's why output is sam, welcome to the website

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this){...xyz}
//     console.log(this.username); //output is undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //output is undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // output is {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // when we want to return without retun keyword then we use paranthisis() when we use curly brasis then we must use return keyword without return keyword we can't return.


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()