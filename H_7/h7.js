// створити об'єкт (не меньше 5ти властивостей) який описує//
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let object={dog:{name:'Nane', age:2, color:'white', breed: 'haskies', size: 'big'},
   people:{name: 'Diana', lastname:'Demianets', surname: 'Oleksandrivna', age: 20, car: undefined},
   car:{model:'ford', volume:20, color:'white', speed:200, height: 1800},
   float:{size:53, room:5, badroom:2, balkon: undefined, color:'grey'},
   book:{page:300, author:1, pictures: undefined, color:'black', height:5}
}
console.log(object)
// -- Створити масив та вивести його в консоль:
//   - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let masyv=[ dogs=['Haskies', 'Laika', 'Bulldog','Pudel', 'Boxer'],
people=['Katia','Bogdan','Serhiy','Kyrylo','Maria'],
car=['BMW','Ford','Audi','Lanous','Cadillac']]
console.log(masyv);


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
let ob2= {
  car: {
    'model': ['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac'],
    volume: 20,
    color: {color1: 'white', color2: 'red'},
    speed: 200,
    height: 1800
  },
  house: {'room': [10, 11, 12, 9, 8], color: {color1: 'white', color2: 'red'}, floors: 2, width: 200, height: 7},
  toy: {
    'size': ['small', 'big'],
    color: {color1: 'blue', color2: 'green'},
    display: undefined,
    accessory: false,
    age: 1
  },
  table: {size: {height: 1.3, width: 2}, ' color': ['pink', 'brown', 'white'], wheels: undefined, length: 1, legs: 4},
  bag: {
    brend: ['Chanel', 'Zara', 'Bershka', 'Rezerved'],
    size: 'small',
    color: 'black',
    accessory: false,
    material: {matelial1: 'velur', matelial2: 'leather'}}
}
console.log(ob2);
// Дан массив:
  let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
  ]
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
  console.log(users[8].status);
// - статус Максима
  console.log(users[5],[11].status);
// - ім'я передостаннього об'єкту
  console.log(users[10].name);
// - ім'я третього об'єкта
console.log(users[3].name);
// - вік Олега
console.log(users[7].age);
// - вік Олі
console.log(users[3],[10].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].name+users[4].age);
// - вік + сатус Анни
console.log(users[5].age +users[5].status);

