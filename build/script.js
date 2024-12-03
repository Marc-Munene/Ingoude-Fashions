const cart = document.getElementById("mycart");
const back = document.getElementById('backToShop')

const btnCart = document.getElementById("btn-cart");
btnCart.addEventListener('click', () => {
    cart.classList.remove("hidden")
});

back.addEventListener('click', () =>{
    cart.remove();
})

