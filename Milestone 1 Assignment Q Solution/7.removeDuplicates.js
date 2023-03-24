function removeDuplicates(cart) {
    const uniqueCart = [...new Set(cart)];
    return uniqueCart;
  }
  