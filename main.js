// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('main');
  const canvas = document.getElementById('viewport');
  const context = canvas.getContext('2d');
  let width = canvas.width;
  const height = canvas.height;

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  function addData() {
    function generateData() {
      const data = [];

      for (let i = 0; i < height; i++) {
        data.push(i / height);
      }
      drawLine(data);
      console.log(data);
    }

    generateData();
    for (let i = 0; i < 10; i++) {}
  }

  function drawLine(dataArray) {
    canvas.width = canvas.width + 1;
    width = width + 1;
    for (var i = 0; i < dataArray.length; i++) {
      console.log('x', width);
      console.log('y', i);
      console.log('opacity', dataArray[i]);

      context.fillStyle = 'rgba(1,1,1,' + dataArray[i] + ')';
      console.log(context.fillStyle);
      context.fillRect(width, i, 1, 1);
    }
  }
};
