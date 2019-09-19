// The function gets called when the window is fully loaded
window.onload = function() {
  console.log('draw data on one canvas');

  const height = 500;

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  const stopMeasurmentBtn = document.getElementById('stopMeasurement');
  stopMeasurmentBtn.addEventListener('click', stopMeasurementInterval);

  let intervalFn;

  const dataArray = [];

  const currentCanvas = document.getElementById('viewport');
  const currentContext = currentCanvas.getContext('2d');

  let lastIndex = 0;

  function stopMeasurementInterval() {
    clearInterval(intervalFn);
  }

  function addData() {
    intervalFn = setInterval(() => {
      generateData();
    }, 10);
  }

  function generateData() {
    const data = [];
    for (let i = 0; i < height; i++) {
      const number = Math.floor(Math.random() * Math.floor(100));
      //dataArray.push(number / height);
      data.push(number / height);
    }
    drawLine(data);
  }

  function drawLine(dataArray) {
    //currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
    const numberOfLines = dataArray.length / height;
    console.log('number of lines', numberOfLines);

    for (var i = 0; i < dataArray.length; i++) {
      currentContext.fillStyle = 'rgba(1,1,1,' + dataArray[i] + ')';
      currentContext.fillRect(lastIndex, i, 1, 1);
    }
    lastIndex = lastIndex + 1;
  }
};
