const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  }

  const originalPrice = 100;
  const discountedPrice = 75;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(discountPercentage); // Output: 25.00
  