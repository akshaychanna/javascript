async function my_func(){
    console.log("within my_func")
    const response = await fetch("https://api.github.com/users")
    console.log("after fetching")
    const users = await response.json()
    console.log("after json")
    return users
}

console.log("at the start")
console.log("before calling my_func")
let a = my_func()
console.log("after calling my_fun")
console.log(a)
console.log("before then")
a.then(function(data){
    console.log(data)
})

console.log("after then")


// Output:-
// at the start
// async_await.js:11 before calling my_func
// async_await.js:2 within my_func
// async_await.js:13 after calling my_fun
// async_await.js:14 Promise {<pending>}
// async_await.js:15 before then
// async_await.js:20 after then
// async_await.js:4 after fetching
// async_await.js:6 after json
// async_await.js:17 (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]