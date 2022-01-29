


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

//adding item to cart
let addToCart = document.getElementsByClassName("add-cart");
let cartContainer = document.getElementsByClassName("cart")[0];

for( var i = 0; i < addToCart.length; i++){
    addToCart[i].addEventListener("click" , addingToCart)
}

function addingToCart(){
    let btn = event.target;
    let btn_parent = btn.parentElement;
    let itemName = btn_parent.children[1]
    let itemPrice = btn_parent.children[2]
    let itemImg = btn_parent.children[0].src
    
    let itemContainer = document.createElement("div");
    itemContainer.innerHTML = `
    <div class="cart-content">
    <div class="cart-box">
        <img src="${itemImg}" alt="" height="80px" width="80px" class="cart-img">
        <div class="detail-box">
            <div class="${itemName}">airmass2</div>
            <div class="${itemPrice}">$45</div>
            <input type="number" value="1" class="cart-quantity">
            
        </div>
        <i class='bx bxs-trash-alt  cart-remove' ></i>

    </div>`

    cartContainer.append(itemContainer);
    
    
    
}