document.addEventListener('keydown', (e) => {
  if (e.isComposing) return; // if current keypress is in an input method, don't mess with it.
  switch (e.code) {
    case 'ArrowDown':
      e.preventDefault();
      console.log('down');
      break;
    case 'ArrowUp':
      e.preventDefault();
      console.log('up');
      break;
    case 'ArrowLeft':
      e.preventDefault();
      console.log('left');
      break;
    case 'ArrowRight':
      e.preventDefault();
      console.log('right');
      break;
    case 'Enter':
      e.preventDefault();
      console.log('enter');
      break;
    case 'Space':
      e.preventDefault();
      console.log('space');
      break;
    default:
      break;
  }
});
