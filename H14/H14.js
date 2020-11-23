// // Реалізувати друкарську машинку.
// //   У вас є текст "Hello World".
// //   Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// //   КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// //   Цим самим ви маєте симулювати написання даного тексту юзером.
// //   Приклад: "Hello"
// // Затримки:
// //   H (затримка 0.6)
// // e (затримка 0.1)
// // l (затримка 0.3)
// // l (затримка 0.7)
// // о (затримка 1)

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('H');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// function e() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('e');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// function l() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('l');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// function o() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('o');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
//
// function probil() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// function w() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('W');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// function r() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('r');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// function d() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('d');
//     }, Math.random() * (1001 - 1) + 1);
//   })
// }
// async function druk() {
//   const word1 = await h();
//   document.write(word1);
//   const word2 = await e();
//   document.write(word2);
//   const word3 = await l();
//   document.write(word3);
//   const word4 = await l();
//   document.write(word4);
//   const word5 = await o();
//   document.write(word5);
//   const word = await probil();
//   document.write(word);
//   const word6 = await w();
//   document.write(word6);
//   const word7 = await o();
//   document.write(word7);
//   const word8 = await r();
//   document.write(word8);
//   const word9 = await l();
//   document.write(word9);
//   const word10 = await d();
//   document.write(word10);
// }
//
// druk()}
// /////////////////////////////////////////////
// ///////////2 спосіб//////////////////////////
// ////////////////////////////////////////////
// ///////////////////////////////////////////
// const hello = document.getElementById('hello');
// hello.innerText=ev=>{
//   function h() {
// function helloWorld(string) {
//   setTimeout(() => {
//     console.log(string);
//     document.write(string)
//   }, Math.random() * (1001 - 1) + 1);
// }
// helloWorld(`H`,()=>{
//     helloWorld(`e`,()=>{
//       helloWorld(`l`,()=>{
//         helloWorld(`l`,()=>{
//           helloWorld(`o`,()=>{
//             helloWorld(` `,()=>{
//               helloWorld(`W`,()=>{
//                 helloWorld(`o`,()=>{
//                   helloWorld(`r`,()=>{
//                     helloWorld(`l`,()=>{
//                       helloWorld(`d`,()=>{
//                       })
//                     })
//                   })
//                 })
//               })
//             })
//           })
//         })
//       })
//     })
// })}}
//
let hello = document.getElementById('hello')
let btn = document.getElementById('btn')
let write = document.getElementById('write');

btn.onclick = async() => {
  write.innerText = "";
  for (let i = 0; i < hello.value.length; i++)
    await arrey(hello.value[i])
}

function arrey(string){
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(string)
      write.innerText += string
      resolve()
    }, Math.random() * (1001 - 1) + 1);
  })
}
