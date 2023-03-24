function fixCartBug(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }
    return cart;
}

  
let cart = [2, 4, 6, 8];
console.log(cart); // [2, 4, 6, 8]

cart = fixCartBug(cart);
console.log(cart); // [4, 8, 12, 16]
  