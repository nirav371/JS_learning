// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  /* 
  In JavaScript, `.map()`, `.filter()`, `.reduce()`, `.find()`, and `.forEach()` are all higher-order functions that operate on arrays. They are used to perform various operations on arrays, but they have different purposes and behaviors. Here's a brief overview of each:

1. `.map()`: The `.map()` method creates a new array by applying a provided function to each element of the original array and then returning the results in a new array. It does not modify the original array. For example:

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
// doubled is now [2, 4, 6, 8]
```

2. `.filter()`: The `.filter()` method creates a new array by filtering out elements from the original array based on a provided condition. It returns a new array containing only the elements that satisfy the condition. It also does not modify the original array. For example:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers is now [2, 4, 6]
```

3. `.reduce()`: The `.reduce()` method is used to reduce an array to a single value (e.g., summing all elements, finding the maximum value, etc.) by applying a function to each element and accumulating the result. It can be used to perform various aggregation tasks. For example:

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is now 10
```

4. `.find()`: The `.find()` method returns the first element in the array that satisfies a provided testing function. It stops iterating once it finds a match and returns the element. If no matching element is found, it returns `undefined`. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find((num) => num > 2);
// found is 3 (the first element that is greater than 2)
```

5. `.forEach()`: The `.forEach()` method is used to iterate over each element in an array and apply a provided function to each element. Unlike the other methods, it does not create a new array or return any value. It is typically used for performing side effects or operations that don't require a new array to be returned. For example:

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num));
// Logs 1, 2, 3
```

In summary, these array methods have different purposes and behaviors:

- `.map()` creates a new array by transforming each element.
- `.filter()` creates a new array by filtering elements based on a condition.
- `.reduce()` reduces an array to a single value by accumulating results.
- `.find()` returns the first element that matches a condition.
- `.forEach()` iterates over the array without creating a new one, typically for side effects.
  */