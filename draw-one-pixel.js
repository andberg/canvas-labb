// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('draw on pixel');
  const canvas = document.getElementById('viewport');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(1,1,1,1)';
  ctx.fillRect(10, 1, 1, 1);
};
