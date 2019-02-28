const form = document.getElementById("register");
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const mainDiv = document.querySelector('.main');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.className = 'filterLabel';
filterCheckbox.className = 'filterCheckbox';
filterLabel.textContent = 'See what has been completed?';
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;
  
  if (isChecked) {
    for(let i = 0; i <= lis.length; i += 1){
      if(lis[i].className === 'finished') {
        lis[i].style.display = '';
      } else {
        lis[i].style.display = 'none';
      }
    }
  } else {
    for(let i = 0; i <= lis.length; i += 1) {
      lis[i].style.display = '';
    }
  }
});



form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = text;
	li.appendChild(span);
	li.className = 'list-li';
	const label = document.createElement('label');
	label.textContent = 'complete?';
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

ul.addEventListener('change', (e) => {
	const checkbox = e.target;
	const checked = checkbox.checked;
	const label = checkbox.parentNode;
	const lineItems = checkbox.parentNode.parentNode;
	if(checked){
		lineItems.className = 'finished';
	} else {
		lineItems.className = 'todo-list';
	}
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
		input.className = 'input-edit';
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












