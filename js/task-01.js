const categories = document.querySelectorAll('.item');
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);



const categoryNames = document.querySelectorAll('h2');
categoryNames.forEach(name => {
    console.log(`Category: ${name.textContent}`);
    console.log(`Elements: ${name.nextElementSibling.children.length}`);
}
    );

    // categories.forEach(el => {
//     console.log(`Category: ${el.firstElementChild.textContent}`);
//     console.log(`Elements: ${el.lastElementChild.children.length}`);
// })