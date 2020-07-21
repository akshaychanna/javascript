
//constructor function


function Person( name ,age) {
    this.name = name
    this.age = age
    console.log(this)
}

const person1 = new Person("akshay",25)
// console.log(person1.name)
// console.log(person1.age)


console.log("hello")

num1 = 5;
num2 = new Number(5)

console.log(typeof num1)
console.log(typeof num2)