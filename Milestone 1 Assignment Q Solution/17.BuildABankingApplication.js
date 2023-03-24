// // Customer account object
// const customerAccount = {
//     name: "John Smith",
//     balance: 500
//   };
  
//   // Function to deposit money into customer account
//   const deposit = (account, amount) => {
//     account.balance += amount;
//     return account.balance;
//   };
  
//   // Function to withdraw money from customer account
//   const withdraw = (account, amount) => {
//     if (amount > account.balance) {
//       return "Insufficient funds.";
//     } else {
//       account.balance -= amount;
//       return account.balance;
//     }
//   };
  
//   // Example usage
//   console.log(customerAccount.balance); // Output: 500
  
//   deposit(customerAccount, 100); // Deposit 100 into customer account
//   console.log(customerAccount.balance); // Output: 600
  
//   withdraw(customerAccount, 50); // Withdraw 50 from customer account
//   console.log(customerAccount.balance); // Output: 550
  
//   withdraw(customerAccount, 700); // Try to withdraw more than the account balance
//   // Output: "Insufficient funds."
//   console.log(customerAccount.balance);



// // Define a customer object
// const customer = {
//   name: "John Doe",
//   balance: 500
// };

// // Define object methods to deposit and withdraw money
// const bank = {
//   deposit: function(amount) {
//     this.balance += amount;
//     console.log(`Deposit successful. Your new balance is ${customer}`);
//   },

//   withdraw: function(amount) {
//     if (amount > this.balance) {
//       console.log("Insufficient balance. Please try again with a smaller amount.");
//     } else {
//       this.balance -= amount;
//       console.log(`Withdrawal successful. Your new balance is ${this.balance}.`);
//     }
//   }
// };

// // Test the deposit and withdraw methods
// bank.deposit(100);
// bank.withdraw(50);
// bank.withdraw(1000);
// bank.deposit(5000);
// bank.withdraw(10000);



// Define a customer object
const customer = {
  name: "John Doe",
  balance: 500
};

// Define object methods to deposit and withdraw money
const bank = {
  deposit: function(amount) {
    customer.balance += amount;
    console.log(`Deposit successful. Your new balance is ${customer.balance}`);
  },

  withdraw: function(amount) {
    if (amount > customer.balance) {
      console.log("Insufficient balance. Please try again with a smaller amount.");
    } else {
      customer.balance -= amount;
      console.log(`Withdrawal successful. Your new balance is ${customer.balance}.`);
    }
  }
};

// Test the deposit and withdraw methods
bank.deposit(100);
bank.withdraw(50);
bank.withdraw(1000);
bank.deposit(5000);
bank.withdraw(10000);

