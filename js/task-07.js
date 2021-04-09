// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при
// перетаскивании ползунка будет меняться размер
// текста.

const font = document.getElementById("font-size-control");
console.log(font);
const text = document.getElementById("text");
font.addEventListener('input', e => {
    text.style.fontSize = e.currentTarget.value + 'px';
    console.log(e.currentTarget.value + 'px')
})