// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій 
// в ul#categories, тобто елементів li.item.Вийде 
// 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories,
// знайде і виведе в консоль текст заголовка елемента(тега h2)
// і кількість елементів в категорії
// (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

// const firstMenuItem = document.querySelectorAll('.item')
// console.log(`У списку ${firstMenuItem.length} категорії`)
// const firstCategories = document.querySelectorAll('h2')
// const title = firstCategories[0].textContent;
// console.log(title)
// const secondMenuItem = document.querySelectorAll('title')
// const message = `Кількість елементів: ${secondMenuItem.length}`
// console.log(message)

// const paragraphs = document.querySelectorAll('h2');
// // paragraphs[0] is the first <p> element
// // paragraphs[1] is the second <p> element, etc.
// console.log(paragraphs[0].nodeName);

const categoriesEl = document.querySelectorAll("li.item")
console.log(`В списке ${categoriesEl.length} категории`);
// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
// const title = element.querySelector('h2').innerHTML;
// const itemsLength = element.querySelectorAll('li').length;
// console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });
const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};