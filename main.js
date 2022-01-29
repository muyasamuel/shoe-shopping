


const cartIcon = document.getElementById("cart-icon");
const closeCart = document.getElementById("close-cart");
const cart = document.querySelector(".cart");

//bringing and taking off the cart-icon-bar

cartIcon.onclick = ()=> {
    cart.classList.add("active");
}
closeCart.onclick = ()=> {
    cart.classList.remove("active");
}