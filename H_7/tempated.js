// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// //
// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"
//// - отримує текст з блоку з id "rules"
let element= document.getElementById('rules')
console.log(element)
// // - замініть текст параграфа з id 'content' на будь-який інший
let elemen= document.getElementById('content')
elemen.innerText='loremdfksmaldfkghg; feadsjkml,wdekr grdsjekrh'
console.log(elemen);

//  // - замініть текст параграфа з id 'rules' на будь-який інший
 let element= document.getElementById('rules')
element1.innerText='loremdfksmaldfkghg; feadsjjhgfdkml,wdekr grdsjekrh nbrdevw dfsasdfg' ;
console.log(element);

// // - змініть кожному елементу колір фону на червоний
// // - змініть кожному елементу колір тексту на синій

let element1 = document.getElementsByTagName('p');
let element2 = document.getElementsByTagName('div');
let element3 = document.getElementsByTagName('ul');
let element4 = document.getElementsByTagName('li');
let arrTeg = [element1,element2,element3,element4];
for (let i = 0; i < arrTeg.length; i++) {
  for (let j = 0; j < arrTeg[i].length; j++) {
    arrTeg[i][j].style.backgroundColor = 'red';
  }
}
let arrTegs = [element1,element2,element3,element4];
for (let i = 0; i < arrTegs.length; i++) {
  for (let j = 0; j < arrTegs[i].length; j++) {
    arrTegs[i][j].style.color = 'blue';
  }
}
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(element1.classList);
// - отримати всі елементи з класом fc_rules
let elemens = document.getElementsByClassName('fc_rules');
console.log(elemens);
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let elements = document.getElementsByClassName('fc_rules');
for (const rule of elements) {
  rule.style.color = 'red'}
