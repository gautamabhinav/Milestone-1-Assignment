function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + (name.slice(1) ? name.slice(1) : '');
  }
  
  // example usage
  console.log(capitalizeName('john')); // prints "John"
  console.log(capitalizeName('Mary')); // prints "Mary"
  console.log(capitalizeName('jane doe')); // prints "Jane doe"