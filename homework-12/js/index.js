// console.log("1");


// setTimeout(()=> (console.log("2"), 1))

// console.log("3");
// console.log("4");

// const hello = () => {
//     console.log("hello");
// };

// const timeout = setTimeout(hello, 1000);

// clearTimeout(timeout);

// const hello = () => {
//     console.log("hello");
// };

// const setInt = setInterval(hello, 1000)

// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");


// let time = null;

// startBtn.addEventListener("click", () => {
//     time = setInterval(() => {
//         console.log("123");
//     }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//     clearInterval(time);
//     console.log("stop");
// });

// const a = {
//     classic() {
//         setTimeout(function () {
//             console.log(`${this}, classic in obj`);
//         });
//     },
//     arr() {
//         setTimeout(() => {
//             console.log(`${this}, arr in obj`);
//         });
//     }
// };

// a.classic();
// a.arr();

// const date = new Date(2023, 12, 12, 12, 12,12,12);
// console.log(date);

// const unixDate = new Date(1000);
// console.log(unixDate);

// const newUnixDate = Date.now();
// console.log(newUnixDate);

// const date = new Date();

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
// }

// const ukr = date.toLocaleString("Uk-uk", options)
// console.log(ukr);


// let prom = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("resolve"), 1000);
//     setTimeout(() => reject("reject"), 1000);
    
// });

// prom.then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject)
// );

// prom.catch(alert);

// prom.finally();


// function load(src) {
//     return new Promise(
//         function (resolve, reject) {
//             let script = document.createElement("script");
//             script.src = src

//             script.onload = () => resolve(script);
//             script.onerror = () => reject(new Error(`Err ${script}`));

//             document.head.append(script);
//         });
// };

// let prom = load("https://cdnjs.cloudflare.com/ajax/lodash.js/4.17.11/lodash.js");

// prom.then(
//     (script) => console.log(`Download ${script}`),
    
// );

// prom.catch(
//     (error) => console.log(`Error ${error.message}`)
// );

// prom.finally(
//     console.log("Finally")
// );

// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(2), 1000);
// }).then(function (result) {
//     console.log(result)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result + 5), 1000)
//     })
// }).then(function (result) {
//     console.log(result);
// })


