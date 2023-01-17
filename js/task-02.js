const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainer = document.querySelector('#ingredients');

const itemsArray = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = item;
  
  return listItem;
});


listContainer.append(...itemsArray);

