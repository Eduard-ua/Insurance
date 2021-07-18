let orderQuantity = document.getElementById('orderQuantity');
let publicQuantity = document.getElementById('publicQuantity');

let size = document.querySelector('#size');
let costPerSize = document.querySelector('#costPerSize');
let totalPrice = document.querySelector('#totalPrice');


let costPerOne = costPerSize.textContent / size.textContent;



orderQuantity.oninput = function () {
    totalPrice.textContent = Math.ceil(costPerOne * orderQuantity.value);
} 

