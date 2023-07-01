let btn = document.querySelector('.btn'),
  box = document.querySelector('.box'),
  button = document.querySelectorAll('button'),
  btnWrapper = document.querySelector('.btn-block'),
  div = document.createElement('div');

div.textContent = ' это новый блок ';
div.style.background = 'blue';

btnWrapper.insertBefore(div, button[3]);

button.forEach((item) => {
  item.style.background = 'red';
});

//console.log(button);

function myAnimation() {
  let pos = 0;

  let myTimerStart = setInterval(animationDisplay, 20);
  function animationDisplay() {
    if (pos == 300) {
      clearTimeout(myTimerStart);
    } else {
      pos++;
      box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

// Делегирование

//btnWrapper.addEventListener('click', function (event) {
//  if (event.target && event.target.tagName == 'BUTTON' && event.target == button[2]) {
//    console.log('ok');
//  } else {
//    console.log('no');
//  }
//}); // проверка если есть event и если tagName == 'BUTTON' и если это 2я кнопка


//btnWrapper.addEventListener('click', function (event) {
//  if (event.target && event.target.classList.contains('first')) {
//    console.log('ok');
//  } else {
//    console.log('no');
//  }
//}); // проверка если есть event и c помощью contains проверяем есть ли class:'first'

btnWrapper.addEventListener('click', function (event) {
  if (event.target && event.target.matches('button.first')) {
    console.log('ok');
  } else {
    console.log('no');
  }
}); // проверка если есть event и c помощью matches(совпадение) проверяем есть ли определенная кнопка и определенный класс 'button.first'


let mainBox = document.querySelector('.main-box'),
  width = mainBox.scrollWidth,
  height = mainBox.scrollHeight,
  mainButton = document.querySelector('.main-button');

console.log(' ширина нашего объекта = ' + width + ',', 'высота нашего объекта = ' + height)

mainButton.addEventListener('click', function () {
  mainBox.style.height = height + 'px'
})

console.log(mainBox.getBoundingClientRect())