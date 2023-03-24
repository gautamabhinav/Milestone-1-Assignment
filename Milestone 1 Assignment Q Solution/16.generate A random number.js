const randomNumber = (() => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
  })();
  
  console.log(randomNumber); // Output: a random number between 1 and 100
  