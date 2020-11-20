// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//   Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//   Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//   Якщо ж все ок, то ви маєте прожити свій звичайний день.
//   Кожна подія має бути з рандомною (не по зростанню) затримкою.
function day(hour) {
  return new Promise((resolve, reject) => {
    console.log('Morning');
    console.log('Alarm ......');

    setTimeout(() => {
      console.log('Brbrbrbrbrbrbrbrb');

      if (hour > 7 && hour < 9) {
        resolve('wake up');
      } else {
        reject('sleep on');
      }
    }, 1000);
  })
}

function breakfast() {
  return new Promise((resolve) => {
    console.log("found food");
    setTimeout(() => {
      console.log('I had breakfast');
      resolve('brush your teeth');
    }, 500)
  })
}

function gostudy(bus) {
  return new Promise((resolve, reject) => {
    console.log("go to study");
    setTimeout(() => {
      if (bus === true) {
        resolve('go');
      } else {
        reject('take the taxi');
      }
    }, 2000);
  })
}

function afterstudy(hours) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hours > 12 && hours < 14) {
        resolve('go to work');
      } else {
        reject('rest');
      }
    }, 500);
  })
}

function afterjob() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('I have to buy products');
      resolve('go to shop');
    }, 5000);
  })
}

function shop(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 50) {
        resolve('buy products');
      } else {
        reject('if do not money go to home');
      }
    }, 500);
  })
}


day(8)
  .then((next) => {
    console.log(`Again early ${next}`);
    return breakfast();
  })
  .then(nextstep => {
    console.log(nextstep);
    return gostudy(true)
  })
  .then((nextstep2) => {
    console.log(`Go go ${nextstep2}`);
    return afterstudy(13)
  })
  .then((nextstep3) => {
    console.log(nextstep3);
    return afterjob();
  })
  .then((step) => {
    console.log(step);
    return shop(20)
  })
  .then((step2) => {
    console.log(step2);
  })
  .catch(err => {
    console.log('___________________')
    console.log(err)
    console.log('___________________')
  })
  .finally(() => {
    console.log('rest');
  })
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function day(hour, task) {
  console.log('Morning');
  console.log('Alarm ......');
  setTimeout(() => {

    console.log('Brbrbrbrbrbrbrbrb');
    if (hour >= 7) {
      task('wake up');
      return;
    }
    task('sleep on');

  }, 1000)
}

function breakfast(task) {
  console.log("found food");
  setTimeout(() => {
    console.log('I had breakfast');
    task('brush your teeth');
  }, 500)
}

function gostudy(bus, task) {
  console.log("go to study");
  setTimeout(() => {

    if (bus === true) {
      task('go');
      return
    }
    task('take the taxi');
  }, 2000);
}

function afterstudy(hours, task) {
  setTimeout(() => {

    if (hours > 12 && hours < 14) {
      task('go to work');
      return;
    }
    task('rest');
  }, 500);
}

function afterjob(task) {
  setTimeout(() => {
    console.log('I have to buy products');
    task('go to shop');
  }, 500);
}

function shop(money, task) {
  setTimeout(() => {
    if (money > 50) {
      task('buy products');
      return;
    }
    task('if you do not money go to home');
  }, 500);
}

day(9, (err) => {
  console.log(`Again early ${err}`);
  breakfast((step) => {
    console.log(step);
    gostudy(true, (err) => {
      console.log(err);
      afterstudy(13, (err) => {
        console.log(err);
        afterjob((arr) => {
          console.log(arr);
          shop(200, (err) => {
            console.log(err);
          })
        })
      })
    })
  })
})


