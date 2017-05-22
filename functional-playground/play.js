import * as lib from '../lib/es6-functional';
import arrayUtils from '../lib/array-utils';

var array = [1,2,3];
// lib.forEach(array, (data) => console.log(data));

// lib.times(100, (n) => console.log(n*3));


let res = lib.some([1,2,3], isNaN);
// console.log('some res', res);

const modifyMe = (item) => item * 2;

// let result = [1,2,3].map(modifyMe);

let result = [1,2,3].map((a) => {
    return lib.tap(a)(modifyMe);
});

let factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n-1);
};

let fastFactorial = lib.memoized(factorial);


let apressBooks = [{
    name: "beginners",
    bookDetails: [{
        "id": 111,
        "title": "C# 6.0",
        "author": "ANDREW TROELSEN",
        "rating": [4.7],
        "reviews": [{good: 4, excellent: 12}]
    }, {"id": 222, "title": "Efficient Learning Machines", "author": "Rahul Khanna", "rating": [4.5], "reviews": []}]
},
    {
        name: "pro",
        bookDetails: [{
            "id": 333,
            "title": "Pro AngularJS",
            "author": "Adam Freeman",
            "rating": [4.0],
            "reviews": []
        }, {
            "id": 444,
            "title": "Pro ASP.NET",
            "author": "Adam Freeman",
            "rating": [4.2],
            "reviews": [{good: 14, excellent: 12}]
        }]
    }];

console.log('cool', arrayUtils.concatAll(arrayUtils.map(apressBooks, (book) => book.bookDetails)));

