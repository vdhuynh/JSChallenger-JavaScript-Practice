  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = true;
  });

  const button = document.getElementById('button');
  button.addEventListener('click' , () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const fullName = document.getElementById('fullName');
    fullName.value = firstName.value + ' ' + lastName.value;
  });

 const button = document.getElementById('button');
  button.addEventListener('click' , () => {
    const oldValue = parseInt(button.innerText, 10);
    button.innerText = oldValue + 1;
  });

const input = document.getElementById('input');
  input.addEventListener('input', () => {
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(li => {
      if(li.innerText.includes(input.value)) return li.hidden = false;
      return li.hidden = true;
    })
  });

const handleHover = event => {
    if(event.target !== list) {
      event.target.style.visibility = 'hidden';
    }
  };
  
  list.addEventListener('mouseover', handleHover);
