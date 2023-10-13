var a={},
    b={key:'b'},
    c={key1:'c'};

a[b]=100;
console.log(a) //output: 100
a[c]=200;
console.log(a) //output: 200
console.log(`88${a[b]}`) //output: 200 how?