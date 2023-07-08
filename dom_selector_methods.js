  const buttonElem = document.getElementById("button");
  
  buttonElem.addEventListener('click', () => {
    const oldText = buttonElem.innerText;
    return button.innerText = oldText === "ON" ? "OFF" : "ON";
  });

  const buttonElem = document.querySelector("#wrapper button");
  const inputElem = document.querySelector("#wrapper input");
  
  buttonElem.addEventListener('click', () => {
    const oldText = inputElem.value;
      return inputElem.value = oldText === "ON" ? "OFF" : "ON";
  });

const listItems = document.querySelectorAll("#list li");
  
  const handleHover = (event) => {
    return event.target.innerText = 'ON';
  };
  
  if(listItems.length > 1) {
    listItems.forEach(item => item.addEventListener('mouseover', handleHover));
  }

  const listItems = document.querySelectorAll('#list li:not(#disabled)');
  
  const button = document.getElementById('button');
  
  const handleClick = () => {
    listItems.forEach(item => {
    const oldText = item.innerText;
      return item.innerText = oldText === 'ON' ? 'OFF' : 'ON';
    })
  };
  
  if(listItems.length > 1) {
    button.addEventListener('click', handleClick);
  }

