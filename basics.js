console.log("hello")
// alert("hey")
console.info('this is info')
console.log("this is log")
// console.time("day":"wed")
// console.debug("this is debug")

console.table({'a':26, 'b':876438})
console.log({'a':26, 'b':876438})

// premitive data types
// string Number boolean NULL undefined Symbol
name = "abc"
age = 45
console.log(typeof age) //number
console.log(name) //'abc'
console.log(typeof name) // string

// reference data types

const today = new Date();
console.log(today)
console.log(typeof today) //object


// type conversion

val = String(746)
console.log(val)
console.log(typeof val) //string
console.log(val.length)

val = String(4+4)
console.log(val)
console.log(typeof val)
console.log(val.length)

val = (5).toString()
console.log(val)
console.log(typeof val)
console.log(val.length)


// string to number
val = Number("1") //1
val = Number(true) //1
val = Number(false) //0
val = Number(null) //0
val = Number("Hello") //NaN (not a number)
val = Number([1,1,2,3]) //NaN



//parseInt and parseFDloat

val = parseInt("100.35") //100
val = Number("100.36") // 100.36
console.log(typeof val) //number

val = parseFloat("100.35") //100.35
console.log(typeof val) //number


//math object
// .PI .E round() ceil() floor() sqrt() abs() pow() min() max() random()

val = Math.floor(Math.random()* 20 +1 )

// floor for floor value(reject decimal) 
// random() generates random number
// * 20 for upto value 0 to 20 it will generate nuber
// +1 for 1 to 20


// string concat

first = "akshay"
last = "channa"

full =first+last // akshaychanna
full = first + ' '+ last
console.log(full)

console.log("my name is " +first+ " and lastname is " +last)

//string methods .toUppserCase toLowerCase
console.log(first.toUpperCase())


//indexOf() and charAt() lastIndexOf() 
// substring()
// slice() 
// split()
// reverse()
// includes()
name = "akshaky"
console.log(name)
abc = name.indexOf('k'); //1
abc = name.lastIndexOf('k'); //5
abc = name.charAt(2)//s
console.log(abc)
// console.log(name.indexAt('k'))