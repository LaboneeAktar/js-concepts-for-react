const products = [
    { name: 'laptop', price: 300000, brand: 'hp' },
    { name: 'phone', price: 9000, brand: 'xiaomi' },
    { name: 'iphone', price: 34500, brand: 'apple' },
    { name: 'watch', price: 20000, brand: 'watch' },
    { name: 'ipad', price: 300000, brand: 'apple' },
    { name: 'tablet', price: 30000, brand: 'canon' },
];

//map
const brands = products.map(product => product.brand);
console.log(brands);

//forEach
products.forEach(product => console.log(product.name));

//filter
const prices = products.filter(product => product.price > 30000);
console.log(prices);

const specificName = products.filter(product => product.name.includes('p'));
console.log(specificName);

//find
const special = products.find(product => product.brand.includes('a'));
console.log(special);