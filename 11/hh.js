// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const text = document.getElementById('text');
const btn = document.getElementById('btn');
btn.onclick = ev => {
  text.hidden
    ? text.hidden = false
    : text.hidden = true
}
//   - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
btn.onclick = ev => {
  if (btn.hidden) {
    btn.hidden = false
  }
  {
    btn.hidden = true
  }
}
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const btn = document.getElementById('btn');
const inp = document.getElementById('age');
btn.onclick = ev => {
  if (inp.valueOf() > 18) {
    alert('hi')
  }
  {
    alert('bye')
  }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

const menu = document.getElementById('a');
const submenu = document.getElementById('submenu');
let flag = false;
menu.onclick = ev => {
  if (flag) {
    submenu.style.display = 'block'
    flag = false;
  } else {
    submenu.style.display = 'none'
    flag = true
  }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.
let comment = [
  {title: 'lorem_1', body: 'lorem ipsum dolo sit ameti'},
  {title: 'lorem_2', body: 'lorem ipsum dolo sit ameti'},
  {title: 'lorem_3', body: 'lorem ipsum dolo sit ameti'},
  {title: 'lorem_1', body: 'lorem ipsum dolo sit ameti'},
  {title: 'lorem_2', body: 'lorem ipsum dolo sit ameti'},
  {title: 'lorem_3', body: 'lorem ipsum dolo sit ameti'}
];
const content = document.getElementById('content')
comment.forEach(item => {
  const div = document.createElement('div')
  const h2 = document.createElement('h2');
  const p = document.createElement('p')
  const button = document.createElement('button')
  button.innerText = 'hide';
  h2.innerText = item.title;
  p.innerText = item.body;
  button.onclick = () => {
    p.hidden
      ? p.hidden = false
      : p.hidden = true
  }
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(button);
  content.appendChild(div);
})

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const btn1 = document.getElementById("btn1")
const input1 = document.getElementById("input1")
const input1_2 = document.getElementById("input1_2")
const input2 = document.getElementById("input2")
const input2_2 = document.getElementById("input2_2")
btn1.onclick = ev => {
  console.log(document.forms.form1.input1.value);
  console.log(document.forms.form1.input1_2.value);
  console.log(document.forms.form2.input2.value);
  console.log(document.forms.form2.input2_2.value);
}

// - Створити функцію, яка генерує таблицю.
//   Перший аргумент визначає кількість строк.
//   Другий параметр визначає кліькіть ячеєк в кожній строці.
//   Третій параметр визначає елемент в який потрібно таблицю додати.
//
function CreatTable(tr, td, id, content = 'text') {
  let table = document.createElement('table');
  table.setAttribute('bordercolor', 'black');
  let element = document.getElementById(id)
  element.appendChild(table);
  for (let i = 0; i < tr; i++) {
    let line = document.createElement('tr');
    table.appendChild(line);
    for (let k = 0; k < td; k++) {
      let col = document.createElement('td');
      line.appendChild(col);
      col.innerText = content;
    }
  }
}

CreatTable(4, 85, 'content', 'lkhg');

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tag_div = document.createElement('div');
let forms_table = document.createElement('form');
let input_tr = document.createElement('input')
let input_td = document.createElement('input')
let input_text = document.createElement('input')
let btn = document.createElement('button');

forms_table.name = 'tabl'
input_tr.name = 'line';
input_tr.placeholder = 'кількість рядків';
input_td.name = 'row';
input_td.placeholder = 'кількість ячеєк';
input_text.name = 'content';
input_text.placeholder = 'вміст ячеєк';
btn.type = 'submit';
btn.innerText = 'ok'

document.body.appendChild(tag_div);
tag_div.appendChild(forms_table);
forms_table.appendChild(input_tr);
forms_table.appendChild(input_td);
forms_table.appendChild(input_text);
forms_table.appendChild(btn);

btn.onclick = (ev) => {
  ev.preventDefault();
  let x = document.forms.tabl
  console.log(document.forms.tabl);
  console.log(document.forms.tabl.line);
  CreatTable(+x.line.value, +x.row.value, 'text', x.content)
}

// -- создать скрипт, который берет считывает на странице (rules.html) текст
// и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
function createMenu() {

  let h1 = document.getElementsByTagName('h1')
  let h2 = document.getElementsByTagName('h2')

  let arr = [h1, h2]

  let ul = document.createElement('ul')
  ul.id = 'menu'
  document.body.prepend(ul)

  for (let i in arr) {
    for (let j = 0; j < arr[i].length; j++) {
      let li = createLi(ul)
      createLink(arr[i], j, li)
    }

  }
}

function createLi(ul) {
  let li = document.createElement('li')
  ul.appendChild(li)
  return li
}

function createLink(array, index, li) {
  let a = document.createElement('a')
  a.innerText = array[index].innerText;
  li.appendChild(a);
  a.href = '#' + array[index].tagName + index;
  createAnchor(array, index)
}

function createAnchor(array, index) {
  array[index].id = '' + array[index].tagName + index
}

createMenu()
// // -- взять массив пользователей
let usersWithAddress = [
  {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
  {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
  {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
  {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
  {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
  {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
  {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
  {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
  {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const content = document.getElementById('content')
const userd = document.createElement('div')

const input1 = document.createElement('input')
const lable1 = document.createElement('label')
input1.type = 'checkbox'
input1.id = 'status'
lable1.innerText = 'status false'


const input2 = document.createElement('input')
const lable2 = document.createElement('label')
input2.type = 'checkbox'
input2.id = 'age'
lable2.innerText = 'старше 29'

const input3 = document.createElement('input')
const lable3 = document.createElement('label')
input3.type = 'checkbox'
input3.id = 'city'
lable3.innerText = 'город киев'


const button = document.createElement('button')
button.innerText = 'Filter'

content.appendChild(userd);
content.appendChild(input1);
content.appendChild(lable1);
content.appendChild(input2);
content.appendChild(lable2);
content.appendChild(input3);
content.appendChild(lable3);
content.appendChild(button);


button.onclick = (ev) => {
  let myArray = JSON.parse(JSON.stringify(usersWithAddress));
  if (input1.checked) {
    myArray = myArray.filter(value => !value.status)
    console.log(myArray)
  }
  if (input2.checked) {
    myArray = myArray.filter(value => value.age >= 29)
    console.log(myArray)
  }
  if (input3.checked) {
    myArray = myArray.filter(
      value => value.address.city === 'Kyiv')
    console.log(myArray)
  }
}

