// Question 1.how to integrate css file in html file?
// Answer - b) using <link> tag

// Question 2. How do you make a new paragraph in HTML?
// Answer - b) using p tag

// Question 3. Div tag is a inline-block element?
// Answer - b) false

// Question 4. Span is an inline-block element?
// Options: b) false

// Question 5. What is the output of following code?(1 mark)
//             function ValueOfC(){
//             Var y = 10;
//             Var c = y ** y
//             console.log(c);
//             Return c;
//             }
//             ValueOfC()
// Answer - c) 10000000000

// Q6. Consider this array :
const people = [
{ id: 1, name: 'John', age: 30 },
{ id: 2, name: 'Jane', age: 25 },
{ id: 3, name: 'Bob', age: 40 },
];
//  (apply all operations on this array)
// only use map and filter functions to get the output array.
// A) Output array : ['John', 'Jane', 'Bob']
// B) Output array :
// [{ "id":1,"name":"John","age":30,"salary":50000},
// {"id": 2,"name": "Jane","age": 25,"salary": 50000},
// {"id": 3,"name": "Bob","age": 40,"salary": 50000}]
// C)Create an array of objects for people who are above 30
// years old, and you only need their names and ages (no
// id property ). You can use map in combination with filter
// Output array : [
// {"name": "Bob","age": 40}
// ]


// Answer - A) 
let arr = people.map(function(el){
    return el.name;
})
console.log(arr);

// Answer - B)
let arr1 = people.map(function(el){
    el.salary = 50000;
    return el;
})
console.log(arr1);


// Answer - C) 
let arr2 = people.filter(function(per){
    return per.age>30;
});
let ans = arr2.map(function(i){
    return {name:i.name,age:i.age};
});

console.log(ans);
console.log();


// Q7: write a function main and pass two functions as
//     parameter to it cb1 and cb2. main(cb1, cb2, x, y)
//     Define cb1 in such a way that will add two numbers
//     Define cb2 in such a way that will give you the
//     difference of two numbers.
//     X and y are two numbers ex- x=11, y =4.

// Answer - 
function main(cb1,cb2,x,y){
    let sum = cb1(x,y);
    console.log("The sum is : " , sum);

    let diff = cb2(x,y);
    console.log("The Difference is : " , diff);

}
function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}

main(addition,subtraction,11,4);
console.log();


// Q8 : given an array
//     var users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//     ];
// outputarray = ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
// to get the output array from users array which array method
// will give you correct result?

// Answer - d) map function;


// Q10: what will be the value of arr?
    // var arr = [1,2,3,4,5].filter(func)
    // function func(v){
    // return false;
    // }

// Answer - C) []



// Q11: what is the key difference between these two
    // properties?Choose appropriate option.
    // Display : none and visibility:hidden

// Answer - B)display : none removes the element from the dom
//          while visibility : hidden just hides the element




// Q12: what will be the output of following code?
//         var a = 1;
//         var b = 0;
//         while (a <= 3)
//         {
//         a++;
//         b += a * 2;
//         console.log(b);
//         }

// Answer - A)4 10 18




// Q13: at the end of both operations what will be the value of arr? (2 marks)
    // var arr= [1,2,3,4]
    // arr.unshift(100)
    // arr.shift()

// Answer - A) [1,2,3,4]
