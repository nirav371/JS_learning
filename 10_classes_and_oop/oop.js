const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    user2 : {
        username2 : "nirav2",

        getUserDetails: function(){
            //console.log("Got user details from database");
            console.log(`Username: ${this.username2}`); // this.username thi user na username ne access nai kari sakay
            // have aano current context user2 thai gayo che
            const username = "nirav"
            console.log(`${username}`);
            console.log(this);
        }
    },
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        const username = "nirav"
        console.log(`${username}`);
        console.log(this);
    }

}



//console.log(user.username)
// console.log(user.user2.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this
}

const userOne = new User("hitesh", 12, true)
/* 
    step1: new object creation with new keyword
    step2: constructure function call thay new keyword na karne ema bathi arguments ne e pack thase ane aapi dese 
    step3: bathu this keyword ma inject thai jase
    step4: aapnne function ma mali jay che bathu
*/
const userTwo = new User("ChaiAurCode",12)
console.log(userOne.constructor);
console.log(userTwo);