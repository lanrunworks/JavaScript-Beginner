'use strict';
let jsbook = { title: 'JavaScript入門', price: 2500, stock: 3, addtax: null };
jsbook.addtax = addTax(jsbook.price);
function addTax(num) {
    let sum = num * 1.1;
    return sum;
};
document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price;
document.getElementById('stock').textContent = jsbook.stock;
document.getElementById('addtax').textContent = jsbook.addtax;