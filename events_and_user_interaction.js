const button = document.getElementById('button');
  const input = document.getElementById('input');
  
  const handleClick = () => {
    input.value = 'Hello World';
  };
  
  button.addEventListener('click', handleClick);

 const element = document.getElementById('element');
  
  const changeText = () => {
    element.innerText = 'Thanks!';
  };
  
  element.addEventListener("mouseover", changeText);

  const element = document.querySelector('#element');
  
  const toggleColor = (isEntering) => {
    element.style.background = isEntering ? 'orange' : 'black';
  };
  
  element.addEventListener('mouseover', () => toggleColor(true));
  element.addEventListener('mouseleave', () => toggleColor(false));

  const element = document.querySelector('#element');
  const wrapper = document.querySelector('#wrapper');
  
  
  const moveRight = () => {
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    const elementWidth = element.getBoundingClientRect().width;
    const currentPosition = parseInt(element.style.left || 0, 10);
    if (currentPosition <= wrapperWidth - elementWidth) {
      element.style.left = `${currentPosition + 1}px`;
    }
  };
  
  wrapper.addEventListener('mousemove', moveRight);

const dragItem = document.querySelector('#dragItem');
  const dropArea = document.querySelector('#dropArea');
  
  const handleDragOver = (event) => event.preventDefault();
  dropArea.addEventListener('dragover', handleDragOver);
  
  const handleDrop = () => {
    dropArea.append(dragItem);
  };
  
  dropArea.addEventListener("drop",handleDrop);
