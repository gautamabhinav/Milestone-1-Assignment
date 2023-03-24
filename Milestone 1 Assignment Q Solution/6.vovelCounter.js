function countVowels(name) {
    let count = 0;
    const vowels = "aeiouAEIOU";
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.indexOf(name[i]) !== -1) {
        count++;
      }
    }
  
    return count;
  }
  
  // Test the function with a name
  const name = "John Smith";
  const vowelCount = countVowels(name);
  console.log(`The name "${name}" contains ${vowelCount} vowels.`);
  