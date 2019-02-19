const form = document.getElementById("register");
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(input.value);
});