// const calculateTotalCost = (cart) =>
//   cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);


//   const cart = [
//     { unitPrice: 10.99, quantity: 2 },
//     { unitPrice: 5.99, quantity: 4 },
//     { unitPrice: 2.99, quantity: 1 },
//   ];
  
//   const totalCost = calculateTotalCost(cart);
//   console.log(totalCost); // Output: 48.93


const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
  }

  const cart = [
    { unitPrice: 10.99, quantity: 2 },
    { unitPrice: 5.99, quantity: 4 },
    { unitPrice: 2.99, quantity: 1 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); // Output: 48.93
  
  
  