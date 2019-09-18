// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('main');
  const canvas = document.getElementById('viewport');
  const context = canvas.getContext('2d');

  const height = canvas.height;
  let nextXPos = 0;
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
  }

  function drawLine(dataArray) {
    nextXPos = nextXPos + 1;
    let x = nextXPos;

    for (var i = 0; i < dataArray.length; i++) {
      console.log('x', x);
      console.log('y', i);
      console.log('opacity', dataArray[i]);

      context.fillStyle = 'rgba(1,1,1,' + dataArray[i] + ')';
      console.log(context.fillStyle);
      context.fillRect(x, i, 1, 1);
    }
  }
};
