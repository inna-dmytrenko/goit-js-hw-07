// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

  const sub = document.querySelector("[data-action='increment']");
  const add = document.querySelector("[data-action='decrement']");
  const span = document.querySelector('#value');
  const wrapper = document.querySelector('#counter ');
  
let counterValue = 0;
function increment(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}


sub.addEventListener('click', increment);
add.addEventListener('click', decrement);