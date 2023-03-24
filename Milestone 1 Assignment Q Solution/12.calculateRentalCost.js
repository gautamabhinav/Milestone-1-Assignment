function calculateRentalCost(numDays, carType) {
    var rentalCost = 0;
  
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 10000;
        break;
      case "Luxury":
        rentalCost = 20000;
        break;
      default:
        return "Invalid car type";
    }
  
    var totalCost = rentalCost * numDays;
    return totalCost;
}


console.log(calculateRentalCost(5, "Economy")); // Output: 20000
console.log(calculateRentalCost(3, "Midsize")); // Output: 30000
console.log(calculateRentalCost(2, "Luxury")); // Output: 40000

  