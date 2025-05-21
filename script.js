const names = ['Іван', 'Марія', 'Петро'];

names.forEach(name => {
  console.log(`Дякуємо, ${name}, за твою працю!`);
});


const words = ['заголовок', 'параграф', 'посилання'];

const htmlTags = words.map(word => {
  if (word === 'заголовок') return `<h1>${word}</h1>`;
  if (word === 'параграф') return `<p>${word}</p>`;
  if (word === 'посилання') return `<a>${word}</a>`;
  return word;
});

console.log(htmlTags);



const Words = ['книга', 'ручка', 'зошит', 'олівець', 'гумка'];

const shortWords = Words.filter(word => word.length < 6);

console.log(shortWords);



const prices = [15, 25, 18, 30, 10];

const firstPriceAbove20 = prices.find(price => price > 20);

console.log(firstPriceAbove20); 


const numbers = [2, 4, 7, 8, 10, 13];

const firstOddIndex = numbers.findIndex(number => number % 2 !== 0);

console.log(firstOddIndex); // Виведе: 2