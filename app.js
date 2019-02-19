const form = document.getElementById("register");
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = text;
	li.appendChild(span);
	li.className = 'list-li';
	const label = document.createElement('label');
	label.textContent = 'finished this yet?';
	label.className = 'label';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';
	const editButton = document.createElement('button');
	const removeButton = document.createElement('button');
	removeButton.textContent = 'remove';
	editButton.textContent = 'edit';
	editButton.className = 'button';
	removeButton.className = 'button right';
	label.appendChild(checkbox);
	li.appendChild(label);
	li.appendChild(editButton);
	li.appendChild(removeButton);
	ul.appendChild(li);
});

ul.addEventListener('click', (e) => {
	const li = e.target.parentNode;
	if(e.target.textContent === 'remove'){
		ul.removeChild(li);
	} else if (e.target.textContent === 'edit'){
		const span = li.firstElementChild;
		const input = document.createElement('input');
		input.type = 'text';
		input.value = span.textContent;
		li.insertBefore(input, span);
		li.removeChild(span);
		e.target.textContent = 'save';
	} else if(e.target.textContent === 'save'){
		const input = li.firstElementChild;
		const span = document.createElement('span');
		span.textContent = input.value;
		li.insertBefore(span, input);
		li.removeChild(input);
		e.target.textContent = 'edit';
	}
});