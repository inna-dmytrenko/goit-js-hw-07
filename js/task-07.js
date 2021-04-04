// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при
// перетаскивании ползунка будет меняться размер
// текста.

const font = document.getElementById("font-size-control");
console.log(font);
font.addEventListener('input', e => {
    console.log(e.currentTarget.value)
})