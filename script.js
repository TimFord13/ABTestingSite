let cart = [];

function addToCart(item, price) {
    const existingItem = cart.find(cartItem => cartItem.item === item);
    if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += price;
    } else {
        cart.push({ item, price, quantity: 1, totalPrice: price });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let totalPrice = 0;
    
    cart.forEach(cartItem => {
        const listItem = document.createElement("li");
        listItem.textContent = `${cartItem.item}: $${cartItem.price} x ${cartItem.quantity} = $${cartItem.totalPrice}`;
        cartItems.appendChild(listItem);
        totalPrice += cartItem.totalPrice;
    });
    
    document.getElementById("total-price").textContent = `Total: $${totalPrice}`;
}

function checkout() {
    alert(`Your total is $${totalPrice}. Thank you for your purchase!`);
    cart = [];
    updateCart();
}
