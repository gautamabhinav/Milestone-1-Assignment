function calculateBillPerPerson(costPerDish, numPeople) {
    var totalBill = costPerDish.reduce((a, b) => a + b);
    var billPerPerson = totalBill / numPeople;
  
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
}

console.log(calculateBillPerPerson([500, 800, 1200], 4));
// Output: { totalBill: 2500, billPerPerson: 625 }

  