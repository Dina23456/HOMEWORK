// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let cat={ name:'Link', age:2, breed: 'scotish', color:'grey'};
let dog={ name:'Lay', age:2, color:'white', breed: 'haskies', size: 'big'};
let car={model:'ford', volume:20, color:'white', speed:200, height: 1800};
let float={size:53, room:5, badroom:2, balkon: undefined, color:'grey'};
  let book={page:300, author:1, pictures: undefined, color:'black', height:5};
  console.log(cat);
console.log(dog);
console.log(car);
console.log(float);
console.log(book);

// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let car1= {'model': ['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac'], volume: 20, color: {color1: 'white', color2: 'red'}};
  let house= {'room': [10, 11, 12, 9, 8], color: {color1: 'white', color2: 'red'}, floors: 2, width: 200, height: 7};
 let toy= {'size': ['small', 'big'],  color: {color1: 'blue', color2: 'green'}, display: undefined};
  let table= {size: {height: 1.3, width: 2}, ' color': ['pink', 'brown', 'white'], wheels: undefined};
  let bag= {brend: ['Chanel', 'Zara', 'Bershka', 'Rezerved'],size: 'small', material: {matelial1: 'velur', matelial2: 'leather'}};
console.log(car1);
console.log(house);
console.log(toy);
console.log(table);
console.log(bag);
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (const arrayElement in cat) {console.log(arrayElement)};
for (const arrayElement in dog) {console.log(arrayElement)};
for (const arrayElement in car) {console.log(arrayElement)};
for (const arrayElement in float) {console.log(arrayElement)};
for (const arrayElement in book) {console.log(arrayElement)};
for (const arrayElement in car1) {console.log(arrayElement)};
for (const arrayElement in house) {console.log(arrayElement)};
for (const arrayElement in toy) {console.log(arrayElement)};
for (const arrayElement in table) {console.log(arrayElement)};
for (const arrayElement in bag) {console.log(arrayElement)};

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(cat));
console.log(Object.keys(dog));
console.log(Object.keys(car));
console.log(Object.keys(float));
console.log(Object.keys(book));
console.log(Object.keys(car1));
console.log(Object.keys(house));
console.log(Object.keys(toy));
console.log(Object.keys(table));
console.log(Object.keys(bag));
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars=[car1={model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac']},{yearprod:[2011,2012,2013,2014,2015,2016]},{volume:[200,300,400,504,654,2213,123,123]}, {color:['red','blue','black','white','green']},
car2={model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac']},{yearprod:[2011,2012,2013,2014,2015,2016]},{volume:[200,300,400,504,654,2213,123,123]}, {color:['red','blue','black','white','green']},
  car3={model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac']},{yearprod:[2011,2012,2013,2014,2015,2016]},{volume:[200,300,400,504,654,2213,123,123]}, {color:['red','blue','black','white','green']},
    car4={model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac']},{yearprod:[2011,2012,2013,2014,2015,2016]},{volume:[200,300,400,504,654,2213,123,123]}, {color:['red','blue','black','white','green']},
    car5={model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac']},{yearprod:[2011,2012,2013,2014,2015,2016]},{volume:[200,300,400,504,654,2213,123,123]}, {color:['red','blue','black','white','green']},
      car6={model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac']},{yearprod:[2011,2012,2013,2014,2015,2016]},{volume:[200,300,400,504,654,2213,123,123]}, {color:['red','blue','black','white','green']}];
console.log(cars);
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities=[city1={names:'Lutsk', population:65432456, country:'Ukraine', region:'Volyn'},
  city1={names:'Rivne', population:654356, country:'Ukraine', region:'Rivnenskiy'},
  city1={names:'Kyiv', population:6543265456, country:'Ukraine', region:'Kyivskiy'}];
console.log(cities);
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2=[{model:['BMW', 'Ford', 'Audi', 'Lanous', 'Cadillac'],yearprod:[2011,2012,2013,2014,2015,2016],volume:[200,300,400,504,654,2213,123,123], color:['red','blue','black','white','green'], driver:{ name: 'anya',
  age: 31,
  status: false,
  address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}}}];
console.log(cars2);
//
// //- проитерировать каждый массив из задания 5,6,7 при помощи while.
let c=0;
while (c<cars.length ){
  console.log(cars[c])
 c++}
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars.length; i++) {
 console.log(cars[i]);
}
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
for (let i = 0; i < cars2.length; i++) {
  console.log(cars2[i]);
}


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const car of cars) {
  console.log(car);
};
for (const city of cities) {
  console.log(city);
};
for (const car2 of cars2) {
  console.log(car2);
};
//  - взять объекты из задания 1 и превратить каждый в json.
//- взять json из задания 11 и превратить их обратно в объекты.
let c=JSON.stringify(cat)
let catclone= JSON.parse(c);
console.log(catclone);
console.log(c);
let d=JSON.stringify(dog)
let dogclone= JSON.parse(d);
console.log(dogclone);
console.log(d);
let carc=JSON.stringify(car)
let carclone= JSON.parse(carc);
console.log(carclone);
console.log(carc);
let f=JSON.stringify(float)
let floatclone= JSON.parse(f);
console.log(floatclone);
console.log(f);
let b=JSON.stringify(book)
let bookclone= JSON.parse(b);
console.log(bookclone);
console.log(b);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let i = 0; i < cars.length; i++) {
  console.log(JSON.stringify(cars[i]))}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let i = 0; i < cities.length; i++) {
  console.log(JSON.stringify(cities[i]))}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let new1=[]
for (let i = 0; i < cars2.length; i++) {
  new1.push(JSON.stringify(cars2[i]))}
console.log(new1);
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
  name: 'max',
  age: 30,
  status: true,
  address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
  name: 'max',
  age: 31,
  status: true,
  address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let u=[];
for (const user of users) {
u.push(user.address)
}
console.log(u);

