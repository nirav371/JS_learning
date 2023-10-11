const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

let hello1 = myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    return item.languageFileName
} )
console.log(hello1)

let hello = myCoding.map((item) => {
    console.log(item.languageName)
    return item.languageFileName + "hello"
})
console.log(hello)

let hello3 = myCoding.filter((item) => {return item.languageFileName == 'js'})
console.log(hello3)