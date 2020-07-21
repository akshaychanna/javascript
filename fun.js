/// the one way
// function greet(fname = "akshay", lname="channa"){
//     return `hello ${fname} hey ${lname}` 
// }
// console.log(greet())


// the other way
// const result = function(x=7){
//     return x*x
// }
// console.log(result(8))


// immidiately invokable function expression
// (function(name){
//     console.log("hello");
// })('brady');
 
cars = ['ssss','ddd','gggg']

// cars.forEach(element => {
//    console.log(element) 
// });


// cars.forEach(function(car,index,array){
//     console.log(car)
//     console.log("change")
//     console.log(index)
//     console.log(array)
// })

users = {
    "name":"akshay",
    "age":24
}
for(let x in users){
    console.log(x)
}
