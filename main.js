// cart 
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
    cart.classList.add('active');
};
// cart open and close
// closeCart.onclick = () => {
//     cart.classList.remove('active');
// };

// cart worrking js 
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Quantity Changes 
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    // add to cart 
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
        button.addEventListener("click", addCartClicked)

    }
}

//remove item form car 
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// quatityChanged
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
    
}
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("item-name")[0].innerText;
    var price = shopProducts.getElementsByClassName("item-price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("item-img")[0].src;
    addProductToCart(title , price , productImg); 
    updatetotal();

}
function addProductToCart(title , price , productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        alert('You have already add this item to cart');
         return ;
    }
   
}
var cartBoxContent = `
              <img src="./images/instructor-1x-v3.jpg" class="cart-img"></img>
            <div class="detail-box">
             <p class="cart-product-title">BIG BAG</p>
             <p class="cart-price">$50</p>
            <input type="number" name="" id="cart-quantity" value="1" class="cart-quantity">

              </div>
            <i class="cart-remove">Trash</i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);


/// update total 
function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBoxes = cartBoxes[i]
        var priceElement = cartBox.getElementsById("cart-price")[0];
        var quantityElement = cartBox.getElementsById("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quatity = quantityElement.value;
        total = total + (price * quatity);
        total = Math.round(total *100) /100; 
        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }

}


