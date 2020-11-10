// создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
const numbers = [1, 34, 56, 78, 12.3, 23, 45, 80987, 764, -75, 3, 34, 655, 876, 8, 9, 32, 99086, 432, 42];
let sort = numbers.sort((a, b) => {
  return a - b;
})
console.log(sort);

let sort = numbers.sort((a, b) => {
  return b - a;
})
console.log(sort);
// -- при помощи filter получить числа кратные 3
let sort1 = numbers.filter(value => value % 3 === 0);
console.log(sort1);
// -- при помощи filter получить числа кратные 10
let sort1 = numbers.filter(value => value % 10 === 0);
console.log(sort1);
// -- перебрать (проитерировать) массив при помощи foreach()
let foreach = numbers.forEach((value, index) => {
    console.log(value, index);
  }
)
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let map = numbers.map((value, index) => {
  if (value) {
    value = value * 3;
    return value;
  }
});
console.log(map);
// - создать массив со словами на 15-20 элементов.

let word = ['hello', 'Hi', 'list', 'kitten', 'dog', 'doll', 'pin', 'map', 'class', 'cap', 'set', 'clock', 'glass', 'bag', 'vase', 'pig'];
// // -- отсортировать его по алфавиту в восходящем порядке.
let sort = word.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  return 1;
});
console.log(sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
let sortt = word.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  return 1;
});
console.log(sortt);
// -- отфильтровать слова длиной менее 4х символов
let filtr = word.filter(value => value.length < 4)
console.log(filtr);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let map = word.map(value => {
    if (value) {
      value = `${value}!`;
      return value;
    }
  }
)
console.log(map);
//Все робити через функції масивів(foreach, map...тд)Дан масив :
let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
  name: 'kolya',
  age: 29,
  status: true
}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
  name: 'anya',
  age: 31,
  status: false
}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
  name: 'masha',
  age: 30,
  status: true
}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let sortc = users.sort((a, b) => {
    return a.age - b.age;
  }
)
console.log(users);
let sort = users.sort((a, b) => {
    return b.age - a.age;
  }
)
console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sort1 = users.sort((a, b) => {
  if (a.name.length < b.name.length) {
    return -1;
  }
  return 1;
})
console.log(sort1);
let sort2 = users.sort((a, b) => {
  if (a.name.length > b.name.length) {
    return -1;
  }
  return 1;
})
console.log(sort2);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let users1= JSON.stringify(users);
JSON.parse(users1);
 let map = users.map((value, index) =>{
    value.id=index;
   return value
 })
console.log(map);

// - відсортувати його за індентифікатором
let sort = users.sort((a, b) => {
	return b.id - a.id});
console.log(sort);


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

 let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
//   - двигун більше 3х літрів
let filter= cars.filter(value => value.volume>3);
console.log(filter);
// - двигун = 2л
let filtr= cars.filter(value => value.volume===2);
console.log(filtr);
// - виробник мерс
let filter1=cars.filter(value => value.producer==='mercedes');
console.log(filter1);
// - двигун більше 3х літрів + виробник мерседес
let filter2=cars.filter(value => value.volume>3 && value.producer==='mercedes');
console.log(filter2);
// - двигун більше 3х літрів + виробник субару
let filter3=cars.filter(value => value.volume>3 && value.producer==='subaru');
console.log(filter3);
// - сили більше ніж 300
let filter4=cars.filter(value => value.power>300);
console.log(filter4);
// - сили більше ніж 300 + виробник субару
let filter5=cars.filter(value => value.power>300 && value.producer==='subaru');
console.log(filter5);
// - мотор серіі ej
let filter6=cars.filter(value => value.engine.startsWith('ej'));
console.log(filter6);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let filter7=cars.filter(value => value.power>300 && value.producer==='subaru' && value.engine.startsWith('ej'));
console.log(filter7);
// - двигун меньше 3х літрів + виробник мерседес
let filter8=cars.filter(value => value.volume<3 && value.producer==='mersedes');
console.log(filter8);
// - двигун більше 2л + сили більше 250
let filter9=cars.filter(value => value.volume>2 && value.power>250);
console.log(filter9);
// - сили більше 250  + виробник бмв
let filter10=cars.filter(value => value.power>250 && value.producer==='bmw');
console.log(filter10);


// - взять слдующий массив
let usersWithAddress = [{
  id: 1,
  name: 'vasya',
  age: 31,
  status: false,
  address: {city: 'Lviv', street: 'Shevchenko', number: 16}
}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {
  id: 3,
  name: 'kolya',
  age: 29,
  status: true,
  address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {
  id: 5,
  name: 'max',
  age: 30,
  status: true,
  address: {city: 'Lviv', street: 'Shevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {
  id: 7,
  name: 'oleg',
  age: 28,
  status: false,
  address: {city: 'Lviv', street: 'Shevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {
  id: 9,
  name: 'masha',
  age: 30,
  status: true,
  address: {city: 'Lviv', street: 'Shevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {
  id: 11,
  name: 'max',
  age: 31,
  status: true,
  address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
let sort = usersWithAddress.sort((a, b) => {
  return b.id - a.id
})
console.log(sort);
// -- отсортировать его по возрасту пользователей
let sort2 = usersWithAddress.sort((a, b) => {
  return a.age - b.age;
})
console.log(sort2);
// -- отсортировать его по возрасту пользователей в обратном порядке
let sort3 = usersWithAddress.sort((a, b) => {
  return b.age - a.age
})
console.log(sort3);
// -- отсортировать его по имени пользователей
let sort4 = usersWithAddress.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  return 1;
});
console.log(sort4);
// -- отсортировать его по имени пользователей в обратном порядке
let sort5 = usersWithAddress.sort((a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  return 1;
});
console.log(sort5);
// -- отсортировать его по названию улицы  в алфавитном порядке
let users = usersWithAddress.flat(7)
let sort6 = users.sort((a, b) => {
  if (b.address.street < a.address.street) {
    return -1;
  }
  return 1;
});
console.log(sort6);
// -- отсортировать его по номеру дома по возрастанию
let sort7 = users.sort((a, b) => {
  if (a.address.number < b.address.number) {
    return -1;
  }
  return 1;
});
console.log(sort7);
// -- отфильтровать (оставить) тех кто младше
let filter = usersWithAddress.filter(value => value.age < 30);
console.log(filter);
// -- отфильтровать (оставить) тех у кого отрицательный статус
let filter1 = usersWithAddress.filter(value => value.status === false);
console.log(filter1);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let filter2 = usersWithAddress.filter(value => value.status === false && value.age < 30);
console.log(filter2);
// -- отфильтровать (оставить) тех у кого номер дома четный
let filter3 = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(filter3);
