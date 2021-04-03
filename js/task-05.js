// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), п
// одставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
let input = document.querySelector('input#name-input');
console.log(input);
// let span = document.querySelector('#name-output');
// console.log(span)
input.addEventListener('keyup', function (e) {
    let output = document.querySelector("#name-output")
    console.log(output)
    output.textContent = e.target.value
    // console.log(output.textContent)
    
    if (output.textContent.length === 0) {
        output.textContent = "незнакомец"
    }
    
})

