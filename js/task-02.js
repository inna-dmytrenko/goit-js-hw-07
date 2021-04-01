const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().
const ulEl = document.querySelector('ul#ingredients')
for (const i of ingredients)
{
  
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = i;
  
  ulEl.append(ingredientsEl)
}
console.log(ulEl)

