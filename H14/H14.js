// Реалізувати друкарську машинку.
//   У вас є текст "Hello World".
//   Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//   КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//   Цим самим ви маєте симулювати написання даного тексту юзером.
//   Приклад: "Hello"
// Затримки:
//   H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
function h() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('H');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function e() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('e');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function l() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('l');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function o() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('o');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function probil() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function w() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('W');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function r() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('r');
    }, Math.random() * (1001 - 1) + 1);
  })
}

function d() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('d');
    }, Math.random() * (1001 - 1) + 1);
  })
}


async function druk() {
  const word1 = await h();
  console.log(word1);
  const word2 = await e();
  console.log(word2);
  const word3 = await l();
  console.log(word3);
  const word4 = await l();
  console.log(word4);
  const word5 = await o();
  console.log(word5);
  const word = await probil();
  console.log(word);
  const word6 = await w();
  console.log(word6);
  const word7 = await o();
  console.log(word7);
  const word8 = await r();
  console.log(word8);
  const word9 = await l();
  console.log(word9);
  const word10 = await d();
  console.log(word10);
}

druk()
