let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Rectangle Sunglasses', 
        tag: 'recta-sun',
        price: 50,
        inCart: 0
    },
    {
        name: 'Geometric Sunglasses', 
        tag: 'geo-sun',
        price: 55,
        inCart: 0
    },
    {
        name: 'Aviator Sunglasses', 
        tag: 'avia-sun',
        price:40,
        inCart: 0
    },
    {
        name: 'Oversized Sunglasses', 
        tag: 'over-sun',
        price: 50,
        inCart: 0
    },
    {
        name: 'Browline Sunglasses', 
        tag: 'brow-sun',
        price: 45,
        inCart: 0
    },
    {
        name: 'Round Sunglasses', 
        tag: 'round-sun',
        price: 50,
        inCart: 0
    },
    {
        name: 'Square Sunglasses', 
        tag: 'square-sun',
        price: 40,
        inCart: 0
    },
    {
        name: 'Clubmaster Sunglasses', 
        tag: 'club-sun',
        price: 35,
        inCart: 0
    }
];

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers();
    })
}

function onloadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('#cart span').textContent = productNumbers;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers= parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cart span').textContent = 1;
    }
}

onloadCartNumbers();