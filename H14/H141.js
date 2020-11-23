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
