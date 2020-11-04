// // // - створити функцію яка виводить масив
// function arr(){
// 	arrey = [];
// 	console.log(arrey);
// }
// arr();
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let arr = [];
// function randomnumber(arr1, lenght) {
//   for (let i = length; i > 0; i++) {
//   let randomN = Math.round(Math.random() * 100);
//     arr1.push(randomN);
// }
// randomnumber(arr, 100)
//
// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function min(a,b, c) {
//   if (a < b && a < c) {
//     console.log(a);
//     return a;
//   }  if (b < a && b < c) {
//     console.log(b);
//     return b;
//   }  if (c < a && c < b) {
//     console.log(c);
//     return c;
//   }
// }
// min(1, 2, 3);
//
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(a,b, c) {
//   if (a > b && a > c) {
//     console.log(a);
//     return a;
//   }  if (b > a && b > c) {
//     console.log(b);
//     return b;
//   }  if (c > a && c > b) {
//     console.log(c);
//     return c;
//   }
// }
// max(1, 2, 3);

//// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function number(){
// 	max = arguments[0];
// 	min = arguments[0];
// 	for(i of arguments)
// 		if (max<= i){max = i};
// 		if (min >= i){min = i};
//
// 	console.log(max);
// 	return min;
// }
// let get_num=number(50,7,7658,-67,67,876);
// console.log(get_num);

// // - створити функцію яка повертає найбільше число з масиву
// function number(){
// 	max = arguments[0];
// 	for(i of arguments)
// 		if (max<= i){max = i};
// 	return max;
// }
// let get_num=number(50,7,7658,-67,67,876);
// console.log(get_num);
// // - створити функцію яка повертає найменьше число з масиву
// function number1(){
// 	min = arguments[0];
// 	for(i of arguments)
// 		if (min >= i){min = i};
// 	return min;
// }
// let get_num1=number1(50,7,7658,-67,67,876);
// console.log(get_num1);
// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// function summ(){let sum=0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum+=arguments[i];}
// 	return sum;
// }
// let get_num2=summ(50,7,7658,-67,67,876);
// console.log(get_num2);
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function result(){let sum=0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum+=arguments[i];
//     res=sum/arguments.length }
// 	return res;
// }
// let get_num3=result(50,7,7658,-67,67,876);
// console.log(get_num3);
// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arr = [
//   {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ]
// function object(arr){
//   let a=arr.length;
//   return a
// }
// let masyv=object(arr)
// console.log(masyv);
// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let arr = [
//   {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ]
// function object2(){
//   let sum=0;
//   for(let i of arr){
//     let a=Object.keys(i);
//     sum+=a.length;
//   }
//   return sum;
// }
// let result1=object2(arr)
// console.log(result1);
// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //   Приклад
// // [1,2,3,4];
// // [2,3,4,5];
// // результат
// //   [3,5,7,9]
// function sum(arr1,arr2){
//   let masyv=[];
//   for (let i = 0; i< arr1.length; i++) {
//     sumelement = arr1[i]+arr2[i];
//     masyv.push(sumelement);
//   }
//   return masyv;
// }
// let result=sum([1,2,3,4],[2,3,4,5]);
// console.log(result);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// function owu(){
//   let div=document.createElement('div');
//   div.innerText='Hello owu';
//   document.body.appendChild(div)
// }
// owu()
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function text(type,text){
//   let element=document.createElement(type)
//   element.innerText=text;
//   console.log(element);
//   document.body.appendChild(element);
// }
// text('h1','jkh hgfg ghfgx gfdf ghfcgfx');


// // (на основі минулого ДЗ)
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:
//
// function arr(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i].id === arr2[j].user_id) {
//                 result.push(arr1[i]);
//                 result[i].address = arr2[j];
//             }
//         }
//     }
//     return result;
// }
// console.log(arr(usersWithId, citiesWithId));

//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
//
//
// let container = document.getElementById('wrap');
//
// function rules1(arr) {
//   for (const i of arr) {
//     let block = document.createElement('div');
//     let title = document.createElement('h3');
//     let body = document.createElement('p');
//
//     title.innerText = `{i.title}`;
//     body.innerText = `{i.body}`;
//
//     container.appendChild(block);
//     block.appendChild(title);
//     block.appendChild(body);
//   }
// }
// rules1(rules);

