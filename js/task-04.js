// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};
let counterValue = 0;
function increment(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}


wrap_button.sub.addEventListener('click', increment);
wrap_button.add.addEventListener('click', decrement);