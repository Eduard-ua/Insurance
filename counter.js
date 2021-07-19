let contentPageMenu = document.querySelector('.content-pagemenu__menu');
let contentPageMenuBlock  = document.querySelector('.content-pagemenu__block');


let contentPageMenuBlockClone = contentPageMenuBlock.cloneNode(true);
let contentPageMenuBlockClone1 = contentPageMenuBlock.cloneNode(true);
let contentPageMenuBlockClone2 = contentPageMenuBlock.cloneNode(true);
let contentPageMenuBlockClone3 = contentPageMenuBlock.cloneNode(true);
let contentPageMenuBlockClone4 = contentPageMenuBlock.cloneNode(true);

contentPageMenu.appendChild(contentPageMenuBlockClone);
let cloneImg = contentPageMenuBlockClone.querySelector('img');
cloneImg.setAttribute('src', 'https://socialmanedger.ru/images/pageMenu/uslugi6.png')


contentPageMenu.appendChild(contentPageMenuBlockClone1);
let cloneImg2 = contentPageMenuBlockClone1.querySelector('img');
cloneImg2.setAttribute('src', 'https://socialmanedger.ru/images/pageMenu/uslugi7.png')

contentPageMenu.appendChild(contentPageMenuBlockClone2);
let cloneImg3 = contentPageMenuBlockClone2.querySelector('img');
cloneImg3.setAttribute('src', 'https://socialmanedger.ru/images/pageMenu/uslugi8.png')

contentPageMenu.appendChild(contentPageMenuBlockClone3);
let cloneImg4 = contentPageMenuBlockClone3.querySelector('img');
cloneImg4.setAttribute('src', 'https://socialmanedger.ru/images/pageMenu/uslugi9.png')

contentPageMenu.appendChild(contentPageMenuBlockClone4);
let cloneImg5 = contentPageMenuBlockClone4.querySelector('img');
cloneImg5.setAttribute('src', 'https://socialmanedger.ru/images/pageMenu/uslugi10.png')




let orderQuantity = document.getElementById('orderQuantity');
let publicQuantity = document.getElementById('publicQuantity');

let size = document.querySelector('#size');
let costPerSize = document.querySelector('#costPerSize');
let totalPrice = document.querySelector('#totalPrice');


let costPerOne = costPerSize.textContent / size.textContent;



orderQuantity.oninput = function () {
    totalPrice.textContent = Math.ceil(costPerOne * orderQuantity.value);
} 



