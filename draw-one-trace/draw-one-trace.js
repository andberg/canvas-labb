// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('draw one trace');
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
    }
    generateData();
  }

  function drawLine(dataArray) {
    nextXPos = nextXPos + 1;
    let x = nextXPos;

    for (var i = 0; i < dataArray.length; i++) {
      context.fillStyle = 'rgba(1,1,1,' + dataArray[i] + ')';
      context.fillRect(x, i, 1, 1);
    }
  }
};
