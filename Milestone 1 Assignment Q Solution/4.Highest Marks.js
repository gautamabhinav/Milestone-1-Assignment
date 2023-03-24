// Define an array with the marks of five students
const marks = [85, 76, 92, 88, 95];

// Initialize a variable to store the highest marks
let highestMarks = 0;

// Iterate through the array of marks using a for loop
for (let i = 0; i < marks.length; i++) {
  // Use the ternary operator to update the highest marks variable
  highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

// Display the highest marks to the teacher using the console
console.log("The highest marks scored by a student is: " + highestMarks);
