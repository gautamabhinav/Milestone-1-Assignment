// const loginForm = document.querySelector('#loginForm');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const message = document.querySelector('#message');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent form submission

//   const email = emailInput.value;
//   const password = passwordInput.value;

//   if (!email.includes('@') || password.length < 8) {
//     message.textContent = 'Invalid email or password!';
//     message.style.color = 'red';
//   } else {
//     message.textContent = 'Valid email and password!';
//     message.style.color = 'green';
//     // submit form if input is valid
//     loginForm.submit();
//   }
// });




const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");


form.addEventListener("submit", (event) => {
event.preventDefault();


if (!email.value.includes("@") || password.value.length < 8) {
    errorMsg.style.display = "block";
} else {
    errorMsg.style.display = "block";
    errorMsg.style.color = "green";
    errorMsg.innerText = "Valid email and password!";
}
});




