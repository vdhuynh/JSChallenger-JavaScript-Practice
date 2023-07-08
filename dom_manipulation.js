  const button = document.querySelector('#button');
  
  const removeRedCircle = () => {
    const redCircle = document.querySelector('#red');
    redCircle.parentNode.removeChild(redCircle);
  };

  const button = document.querySelector('#wrapper button');
  
  const changeInput = () => {
    const input = document.querySelector('#inputEl');
    if(input) {
      input.value = 'Hello World';
    }
  };
  
  button.addEventListener('click', changeInput);
  
  document.querySelector('#wrapper input').setAttribute('id', 'inputEl');

  const button = document.querySelector('#button');
  
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  button.parentNode.append(wrapper);
  wrapper.append(button);
  
  const btn = document.querySelector('#wrapper btn');
  
  if(btn) {
    const handleClick = () => {
      btn.innerText = 'Thank you! ❤️'
    }
  
    btn.addEventListener('click', handleClick)
  }

  const button = document.getElementById('button');
  button.addEventListener('click' , () => {
    const input = document.getElementById('input');
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    list.append(newItem);
  });
