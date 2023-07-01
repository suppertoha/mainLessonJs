let soldier = {
  healht: 200,
  armor: 400
}

let john = {
  healht: 100
}

john.__proto__ = soldier;
console.log(john)
console.log(john.armor)

{ healht: 100 }
400



let div = document.createElement('div'),
    text = document.createTextNode('тут был я');

console.log(div, text)
