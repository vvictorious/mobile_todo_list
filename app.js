const form = document.getElementById("register");
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	const li = document.createElement('li');
	li.textContent = text;
	li.className = 'list-li';
	const label = document.createElement('label');
	label.textContent = 'finished this yet?';
	label.className = 'label';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';
	li.appendChild(label);
	li.appendChild(checkbox);
	ul.appendChild(li);
});