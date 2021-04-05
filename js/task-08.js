// Напиши скрипт создания и очистки коллекции
// элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция
// элементов очищается.

// Создай функцию createBoxes(amount), которая
// принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано
// в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен
// быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая
// очищает div#boxes.

const render = document.querySelector('[data-action=render]');
const destroy = document.querySelector('[data-action=destroy]');
const boxes = document.querySelector('#boxes');
// console.log(render);
// console.log(destroy);
// console.log(boxes);

render.addEventListener('click', e => {
    const input = document.querySelector('input');
    let amount = +input.value;
    createBoxes(amount);
});
function createBoxes(amount) {
        let basicSize = 30;
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < amount; i++) {
            let size = basicSize + i * 10;
            let itemdiv = document.createElement("div");
            itemdiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba(${random()}, ${random()}, ${random()} )`;
            fragment.appendChild(itemdiv);
        }
        boxes.appendChild(fragment);
    }
destroy.addEventListener('click', e => {
boxes.innerHTML = "";
   });
function random() {
  return Math.floor(Math.random() * 256);
}

