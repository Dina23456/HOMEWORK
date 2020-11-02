// -- змінює колір тексту елемнту з ід main_header на будь-який
let idcolor= document.getElementById('main_header');
idcolor.style.color='blue';
// -- робить шириниу елементу ul 400 пікселів
let ulwidth= document.getElementsByTagName('ul');
for(const ul1 of ulwidth){
  ul1.style.width='400px';
};
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let classlink= document.getElementsByClassName('linkList');
for(const link of classlink){
  link.style.width='50%'
};

//-- отримує текст який зберігається в елементі з класом listElement2
let classli= document.getElementsByClassName('listElement2');
for (const classli1 of classli) {
  console.log(classli1.innerText);
}
// -- отримує всі елементи li та змінює ім колір фону на сірий
let element= document.getElementsByTagName("li");
for (const element1 of element) {
  element1.style.backgroundColor='grey'
};

// -- отримує всі елементи 'a' та додає їм клас anchor
let allelements=document.getElementsByTagName('a');
for (const allelement1 of allelements) {
  allelement1.classList.add('anchor')
};
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allelements4=document.getElementsByTagName('a');
for(const all4 of allelements4){
  if(all4.innerText==='link3'){
    all4.style.fontSize='40px'
}
};
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let allelements3=document.getElementsByTagName('a');
for(const all3 of allelements3){
 all3.classList.add('element_XXX')
};

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let allelements2=document.getElementsByTagName('sub-header');
let Color1 = prompt('Color?');
for (const element of allelements2) {
  element.style.backgroundColor = `${Color1}`
}

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let allelements1=document.getElementsByTagName('sub-header');
for(const all of allelements1){
  if(all.innerText==='content 2 segment')
  {let Color1 = prompt('Text?');
  all.style.color=`${Color1}`}
};


// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let element4=document.getElementsByClassName('content_1')
let text=prompt('Text?')
for (const elem1 of element4) {
  elem1.innerText = `${text}`;
}
prompt(element4.innerText);

//-- отримати елементи p та змінити їм paddin на довільне значення
let elem=document.getElementsByTagName('p');
for (const Ele of elem) {
  Ele.style.padding='26px';
};
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let element3=document.getElementsByClassName('tex2')
for (const Element of element3) {
  Element.innerText='Lorem gfdbsdfnhhgf mgnbvgh fdsfghm  trfd g tyrd h d gfd hf dgc'
}


